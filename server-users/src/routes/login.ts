import express, { Request, Response, Router } from 'express';

import { getUser } from '../controllers/users'

const router: Router = express.Router();

router.get('/api/login/:email', getUser)

export default router;