import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Admin from '@/models/Admin';
import { comparePassword, generateToken, hashPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const adminEmail = (process.env.ADMIN_EMAIL || 'admin@mcehassan.ac.in').toLowerCase().trim();
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

    // Ensure default admin exists and has the correct password
    const defaultHashedPassword = await hashPassword(adminPassword);
    let admin = await Admin.findOne({ email: adminEmail }).select('+password');
    if (!admin) {
      admin = await Admin.create({
        name: 'Administrator',
        email: adminEmail,
        password: defaultHashedPassword,
        role: 'super-admin',
      });
    } else {
      // Force update password to match environment configurations
      admin.password = defaultHashedPassword;
      await admin.save();
    }

    // Now look up the requested user email
    let targetAdmin = await Admin.findOne({ email: normalizedEmail }).select('+password');
    if (!targetAdmin) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isPasswordValid = await comparePassword(password, targetAdmin.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Set admin for remaining response tokens
    admin = targetAdmin;

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    const token = generateToken({
      id: admin._id.toString(),
      email: admin.email,
      role: admin.role,
    });

    return NextResponse.json(
      {
        message: 'Login successful',
        token,
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
