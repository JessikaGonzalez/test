import express, { Express, Request, Response, Router } from 'express';
import cors from "cors";
const body = require('body-parser');
import userRoutes from './routes/user'
import userLogin from './routes/login'
import taskRoutes from './routes/task'

const router: Router = express.Router();
const app: Express = express();

app.use(cors<Request>());
app.use(body.json());
app.use(userRoutes);
app.use(userLogin);
app.use(taskRoutes);

app.listen(4020, () => {
  console.log('Server Up')
});
