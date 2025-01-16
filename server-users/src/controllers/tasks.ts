import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ITask } from '../interfaces/task';
import { openMongoConnection, closeMongoConnection } from '../db/config'

export const getAll = async (req: Request, res: Response) => {
  let tasks: any;
  try {
    await openMongoConnection();
    var modelTask = mongoose.model('task');
    tasks = await modelTask.find();
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
    const { title, description, state } = req.body;
    await openMongoConnection();
    var modelTask = mongoose.model('task');
    task = await modelTask.insertMany({
      title, description, state
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
    const { title, description, state } = req.body;
    await openMongoConnection();
    var modelTask = mongoose.model('task');
    task = await modelTask.updateOne(
      {
        _id: id
      },
      {
        title,
        description,
        state
      });
  } catch (error) {
    task = {error}
  } finally {
    await closeMongoConnection()
  }
  res.send({task});
}
