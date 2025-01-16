import Axios from 'axios';

import { IUser } from '../interfaces/users';

const axios = Axios.create();

export const getAllUsers = async () => {
  return axios.get<IUser[]>(`http://localhost:4020/api/users/`).then((res) => res.data);
};

