import Axios from 'axios';

import { IUser } from '../interfaces/users';

const axios = Axios.create();

export const logInUser = async (email: string) => {
  return axios.get<IUser>(`http://localhost:4020/api/login/${email}`).then((res) => res.data);
};
