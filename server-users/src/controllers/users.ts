import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import {
  openMongoConnection,
  closeMongoConnection,
  autorization,
  PRIVATE_KEY
} from '../db/config'
import { IUser } from '../interfaces/user';

export const addUser = async (req: Request, res: Response) => {
  let user: any;
  const { name, email } = req.params;
  if (!(name !== '' && email !== '')) {
    res.send({user});
  }
  try {
    await openMongoConnection();
    var modelUser = mongoose.model('user');
    user = await modelUser.insertMany({
      name,
      email,
      createdAt: new Date()
    });
  } catch (error) {
    res.send({error});
  } finally {
    await closeMongoConnection()
  }
  res.send({user});
}

export const getAll = async (req: Request, res: Response) => {
  let users: any;
  try {
    await openMongoConnection();
    await autorization(req.headers.authorization || '');
    var modelUser = mongoose.model('user');
    users = await modelUser.find();
    res.send(users)
  } catch (error) {
    res.send({error})
  } finally {
    await closeMongoConnection();
  }
}

export const getUserEmail: any = async (email: string) => {
  try {
    var modelUser = mongoose.model('user');
    await openMongoConnection();
    const user = await modelUser.findOne({email});
    return user;
  } catch(error) {
    await closeMongoConnection();
    return error
  }
}

export const getUser = async (req: Request, res: Response) => {
  let user: any;
  const { email } = req.params;
  try {
    await openMongoConnection();
    var modelUser = mongoose.model('user');
    user = await modelUser.findOne({email});
  } catch (error) {
    user = {error}
  } finally {
    await closeMongoConnection()
  }
  res.send(user);
}

export const getTokenUser = async (req: Request, res: Response) => {
  let token: any;
  const { email } = req.params;
  try {
    await openMongoConnection();
    var modelUser = mongoose.model('user');
    const user = await modelUser.findOne({email});
    token = jwt.sign({ user: user.email }, PRIVATE_KEY, {expiresIn: '2h'});
  } catch (error) {
    token = {error}
  } finally {
    await closeMongoConnection()
  }
  res.send({token});
}
