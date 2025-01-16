import mongoose, { Schema } from 'mongoose';
import { ITaskDocument, ITaskModel } from '../../../interfaces/task'

export const taskSchema = new Schema<ITaskDocument>(
  {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: true,
    },
  }
);

export const connection = mongoose.createConnection();
