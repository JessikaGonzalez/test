import Axios from 'axios';

import { ITasks } from '../interfaces/task';

const axios = Axios.create();

export const getAllTasks = async () => {
  return axios.get<ITasks>(`http://localhost:4020/api/tasks/`).then((res) => res.data);
};

