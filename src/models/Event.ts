import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  image: string;
  category: string;
  registrationLink?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      maxlength: [200, 'Title cannot be more than 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    date: {
      type: Date,
      required: [true, 'Please provide event date'],
    },
    time: {
      type: String,
      required: [true, 'Please provide event time'],
    },
    location: {
      type: String,
      required: [true, 'Please provide location'],
    },
    image: {
      type: String,
      default: '/images/default-event.png',
    },
    category: {
      type: String,
      enum: ['academic', 'cultural', 'sports', 'technical', 'placement', 'other'],
      default: 'other',
    },
    registrationLink: {
      type: String,
    },
    status: {
      type: String,
      enum: ['upcoming', 'ongoing', 'completed'],
      default: 'upcoming',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
