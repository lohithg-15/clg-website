import mongoose, { Schema, Document } from 'mongoose';

export interface IDepartment extends Document {
  name: string;
  code: string;
  description: string;
  image: string;
  headName: string;
  headEmail: string;
  established: number;
  programs: string[];
  vision: string;
  mission: string;
  overview: string;
  createdAt: Date;
  updatedAt: Date;
}

const DepartmentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide department name'],
      unique: true,
    },
    code: {
      type: String,
      required: [true, 'Please provide department code'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    image: {
      type: String,
      default: '/images/default-dept.png',
    },
    headName: {
      type: String,
      required: [true, 'Please provide department head name'],
    },
    headEmail: {
      type: String,
      required: [true, 'Please provide department head email'],
    },
    established: {
      type: Number,
    },
    programs: {
      type: [String],
      default: ['B.E', 'M.Tech'],
    },
    vision: {
      type: String,
    },
    mission: {
      type: String,
    },
    overview: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Department || mongoose.model('Department', DepartmentSchema);
