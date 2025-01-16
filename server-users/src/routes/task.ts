import express, { Router } from 'express';

import { getAll, getTask, putTask, deleteTask, updateTask } from '../controllers/tasks'

const router: Router = express.Router();

router.get('/api/tasks/', getAll)

router.get('/api/tasks/:id', getTask)

router.post('/api/task/', putTask)

router.put('/api/tasks/:id', updateTask)

router.delete('/api/task/:id', deleteTask)

export default router;
