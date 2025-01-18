import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import { taskSchema, userSchema } from './models';

export const connection = mongoose.createConnection();

export async function openMongoConnection(): Promise<mongoose.Connection> {
  try {
    await mongoose.connect('mongodb+srv://gonzalezjezzika:CxqfMYFbTAmbh1zZ@cluster0.ju6lj.mongodb.net/test?retryWrites=true&w=majority');
    mongoose.model('task', taskSchema);
    mongoose.model('user', userSchema);
    console.log(`Connected to database`);
  } catch (error) {
    console.error(`Error connecting to database`);
    console.error(error);
    throw error;
  }

  return connection;
}

export async function closeMongoConnection() {
  connection.close();
  console.log('Close connection')
}

export const ObjectId = mongoose.Types.ObjectId;

export const PRIVATE_KEY = '@0)nv9w&2TmSoLk';

const verifyAuthToken = async (token: string) => {
  return await jwt.verify(token, PRIVATE_KEY);
}

export const autorization = async (authorization: string) => {
  return verifyAuthToken(authorization);
}
