import { Schema } from 'mongoose';
import { ITaskDocument } from '../../../interfaces/task'

export const taskSchema = new Schema<ITaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  }
);
