import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'replied' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone'],
    },
    subject: {
      type: String,
      required: [true, 'Please provide subject'],
    },
    message: {
      type: String,
      required: [true, 'Please provide your message'],
    },
    status: {
      type: String,
      enum: ['new', 'replied', 'archived'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
