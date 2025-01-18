import express, { Router } from 'express';

import { getAll, addUser, getTokenUser } from '../controllers/users'

const router: Router = express.Router();

router.get('/api/users/', getAll)

router.get('/api/user/:email', getTokenUser)

router.post('/api/user/:name/:email', addUser)

export default router;
