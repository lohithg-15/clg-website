import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Department from '@/models/Department';
import { extractToken, verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const departments = await Department.find({}).sort({ name: 1 });

    return NextResponse.json({
      data: departments,
    });
  } catch (error) {
    console.error('Error fetching departments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch departments' },
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

    const department = await Department.create(data);

    return NextResponse.json(
      { data: department, message: 'Department created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating department:', error);
    return NextResponse.json(
      { error: 'Failed to create department' },
      { status: 500 }
    );
  }
}
