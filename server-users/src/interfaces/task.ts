import { Model } from 'mongoose';

import {
  IBaseObject,
} from './base';

export interface ITask extends IBaseObject {
  title: string;
  description: string;
  state: string;
  user: string;
  createdAt: Date;
}

export interface ITaskDocument extends ITask {
  getAll(): Promise<ITaskDocument>;
}

export interface ITaskModel extends Model<ITaskDocument> {}
