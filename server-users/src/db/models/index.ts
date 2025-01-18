import mongoose from 'mongoose';
export const connection = mongoose.createConnection();

export * from '../../interfaces/task';
export * from './task/model';
export * from '../../interfaces/user';
export * from './user/model';
