import { Model } from 'mongoose';

import {
  IBaseObject,
} from './base';

export interface IUser extends IBaseObject {
  name: string;
  email: string;
  createdAt: Date;
}

export interface IUserDocument extends IUser {
  getAll(): Promise<IUserDocument>;
}

export interface IUserModel extends Model<IUserDocument> {}
