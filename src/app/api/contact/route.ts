import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json(
      { data: contact, message: 'Message sent successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error sending contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const messages = await Contact.find({}).sort({ createdAt: -1 });

    return NextResponse.json({
      data: messages,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
