import Axios from 'axios';

import { getToken } from './users';
import Cookies from 'js-cookie';
import { ITasks } from '../interfaces/task';

var axios = Axios.create();
const cookieEmail = Cookies.get('email');


export const getAllTasks = async () => {
  if (!cookieEmail || cookieEmail === '') {
    return {error: 'Not found'};
  }
  let token = await getToken(cookieEmail);
  token = Object.values(token)[0].toString();
  const headers = {authorization: token};
  return axios.get<ITasks>(`http://localhost:4020/api/tasks/${cookieEmail}`, { headers }).then((res) => res.data);
};

export const addTask = async (title: string, description: string, email: string) => {
  if (!cookieEmail || cookieEmail === '') {
    return {error: 'Not found'};
  }
  let token = await getToken(cookieEmail);
  token = Object.values(token)[0].toString();
  const headers = {authorization: token};
  const data = {
    title,
    description,
    email,
  };
  return axios.post<ITasks>(`http://localhost:4020/api/task/`, data, { headers }).then((res) => res.data);
};

export const updateTask = async (id: string, title: string, description: string) => {
  if (!cookieEmail || cookieEmail === '') {
    return {error: 'Not found'};
  }
  let token = await getToken(cookieEmail);
  token = Object.values(token)[0].toString();
  const headers = {authorization: token};
  const data = {
    title,
    description
  };
  return axios.put<ITasks>(`http://localhost:4020/api/task/${id}`, data, { headers }).then((res) => res.data);
};

export const removeTask = async (id: string) => {
  if (!cookieEmail || cookieEmail === '') {
    return {error: 'Not found'};
  }
  let token = await getToken(cookieEmail);
  token = Object.values(token)[0].toString();
  const headers = {authorization: token};
  return axios.delete<ITasks>(`http://localhost:4020/api/task/${id}`, { headers }).then((res) => res.data);
};
