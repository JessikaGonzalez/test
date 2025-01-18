import { Schema } from 'mongoose';
import { IUserDocument } from '../../../interfaces/user'

export const userSchema = new Schema<IUserDocument>(
  {
    _id: {
      type: Object,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  }
);
