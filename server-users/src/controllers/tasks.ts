import { Request, Response } from 'express';
import mongoose from 'mongoose';
import {
  openMongoConnection,
  closeMongoConnection,
  autorization
} from '../db/config'
import { getUserEmail } from './users';

export const getAll = async (req: Request, res: Response) => {
  let tasks: any;
  const { email } = req.params;
  try {
    await openMongoConnection();
    const user = await getUserEmail(email);
    await autorization(req.headers.authorization || '');
    var modelTask = mongoose.model('task');
    tasks = await modelTask.find({user: user._id.toString()});
  } catch (error) {
    tasks = {error}
  } finally {
    await closeMongoConnection()
  }
  res.send({tasks});
}

export const getTask = async (req: Request, res: Response) => {
  let task: any;
  try {
    const { id } = req.params;
    await openMongoConnection();
    await autorization(req.headers.authorization || '');
    var modelTask = mongoose.model('task');
    task = await modelTask.findById(id);
  } catch (error) {
    task = {error}
  } finally {
    await closeMongoConnection()
  }
  res.send({task});
}

export const putTask = async (req: Request, res: Response) => {
  let task: any;
  try {
    const { title, description, email } = req.body;
    const user = await getUserEmail(email);
    const date = new Date();
    await openMongoConnection();
    await autorization(req.headers.authorization || '');
    var modelTask = mongoose.model('task');
    task = await modelTask.insertMany({
      title,
      description,
      state: 'Pending',
      user: user._id.toString(),
      createdAt: date
    });
  } catch (error) {
    task = {error}
  } finally {
    await closeMongoConnection()
  }
  res.send({task});
}

export const deleteTask = async (req: Request, res: Response) => {
  let task: any;
  let success: boolean = false;
  try {
    const { id } = req.params;
    await openMongoConnection();
    await autorization(req.headers.authorization || '');
    var modelTask = mongoose.model('task');
    task = await modelTask.deleteOne({
      _id: id
    });
    success=true;
  } catch (error) {
    task = {error}
  } finally {
    await closeMongoConnection()
  }
  res.send({success});
}

export const updateTask = async (req: Request, res: Response) => {
  let task: any;
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await openMongoConnection();
    var modelTask = mongoose.model('task');
    task = await modelTask.updateOne(
      {
        _id: id
      },
      {
        title,
        description
      });
  } catch (error) {
    task = {error}
  } finally {
    await closeMongoConnection()
  }
  res.send({task});
}
