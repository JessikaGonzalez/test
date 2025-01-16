import express, { Request, Response, Router } from 'express';

import { getAll, getUser } from '../controllers/users'

const router: Router = express.Router();

router.get('/api/users/', getAll)

export default router;