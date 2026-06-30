import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Event from '@/models/Event';
import { extractToken, verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    const query: any = {};
    if (status) {
      query.status = status;
    }

    const skip = (page - 1) * limit;

    const events = await Event.find(query)
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Event.countDocuments(query);

    return NextResponse.json({
      data: events,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const token = extractToken(request);
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const { title, description, date, time, location, image, category } = await request.json();

    if (!title || !description || !date || !time || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const event = await Event.create({
      title,
      description,
      date,
      time,
      location,
      image: image || '/images/default-event.png',
      category: category || 'other',
    });

    return NextResponse.json(
      { data: event, message: 'Event created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}
