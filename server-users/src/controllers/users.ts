import { Request, Response } from 'express';
import { userData } from '../db/index';

export const getAll = (req: Request, res: Response) => {
  res.send(userData.users);
}

export const getUser = (req: Request, res: Response) => {
  const user = userData.users.find(user => user.email === req.params.email)
  res.send(user);
}
