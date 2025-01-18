import Axios from 'axios';
import Cookies from 'js-cookie';

const axios = Axios.create();
const cookieEmail = Cookies.get('email');

export const getAllUsers = async () => {
  if (!cookieEmail || cookieEmail === '') {
    return {error: 'Not found'};
  }
  let token = await getToken(cookieEmail);
  token = Object.values(token)[0].toString();
  const headers = {authorization: token};
  return axios.get(`http://localhost:4020/api/users/`, { headers }).then((res) => res.data);
};

export const getToken = async (email: string) => {
  return axios.get<string>(`http://localhost:4020/api/user/${email}`).then((res) => res.data);
}
