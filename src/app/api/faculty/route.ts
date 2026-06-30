import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Faculty from '@/models/Faculty';
import { extractToken, verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const department = searchParams.get('department');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    const query: any = {};
    if (department) {
      query.department = department;
    }

    const skip = (page - 1) * limit;

    const faculty = await Faculty.find(query)
      .sort({ name: 1 })
      .skip(skip)
      .limit(limit);

    const total = await Faculty.countDocuments(query);

    return NextResponse.json({
      data: faculty,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching faculty:', error);
    return NextResponse.json(
      { error: 'Failed to fetch faculty' },
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

    const data = await request.json();

    const faculty = await Faculty.create(data);

    return NextResponse.json(
      { data: faculty, message: 'Faculty created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating faculty:', error);
    return NextResponse.json(
      { error: 'Failed to create faculty' },
      { status: 500 }
    );
  }
}
