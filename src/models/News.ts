import mongoose, { Schema, Document } from 'mongoose';

export interface INews extends Document {
  title: string;
  description: string;
  content: string;
  image: string;
  date: Date;
  author: string;
  featured: boolean;
  status: 'draft' | 'published';
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const NewsSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      maxlength: [200, 'Title cannot be more than 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    image: {
      type: String,
      default: '/images/default-news.png',
    },
    date: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      default: 'Admin',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'published',
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.News || mongoose.model('News', NewsSchema);
