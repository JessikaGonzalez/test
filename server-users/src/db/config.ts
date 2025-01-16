import mongoose from 'mongoose';
import { taskSchema } from './models';

export const connection = mongoose.createConnection();

export async function openMongoConnection(): Promise<mongoose.Connection> {
  try {
    await mongoose.connect('mongodb+srv://gonzalezjezzika:CxqfMYFbTAmbh1zZ@cluster0.ju6lj.mongodb.net/test?retryWrites=true&w=majority');
    mongoose.model('task', taskSchema);
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