import mongoose, { Schema, Document } from 'mongoose';

export interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
  role: 'super-admin' | 'admin' | 'editor';
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ['super-admin', 'admin', 'editor'],
      default: 'editor',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
