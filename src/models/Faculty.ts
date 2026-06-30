import mongoose, { Schema, Document } from 'mongoose';

export interface IFaculty extends Document {
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  qualification: string;
  specialization: string;
  image: string;
  experience: number;
  research: string;
  officeLocation: string;
  createdAt: Date;
  updatedAt: Date;
}

const FacultySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide faculty name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
    },
    phone: {
      type: String,
    },
    department: {
      type: String,
      required: [true, 'Please specify department'],
    },
    designation: {
      type: String,
      enum: ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer'],
      default: 'Assistant Professor',
    },
    qualification: {
      type: String,
      required: [true, 'Please provide qualification'],
    },
    specialization: {
      type: String,
    },
    image: {
      type: String,
      default: '/images/default-faculty.png',
    },
    experience: {
      type: Number,
      default: 0,
    },
    research: {
      type: String,
    },
    officeLocation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Faculty || mongoose.model('Faculty', FacultySchema);
