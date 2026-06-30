import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/News';
import { extractToken, verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const featured = searchParams.get('featured');

    const query: any = { status: 'published' };
    if (featured === 'true') {
      query.featured = true;
    }

    const skip = (page - 1) * limit;

    const news = await News.find(query)
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit);

    const total = await News.countDocuments(query);

    return NextResponse.json({
      data: news,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    // Verify admin token
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

    const { title, description, content, image, featured } = await request.json();

    if (!title || !description || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const news = await News.create({
      title,
      description,
      content,
      image: image || '/images/default-news.png',
      featured: featured || false,
      author: payload.email,
    });

    return NextResponse.json(
      { data: news, message: 'News created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: 'Failed to create news' },
      { status: 500 }
    );
  }
}
