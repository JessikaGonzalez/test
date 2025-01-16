import { RouteProps } from 'react-router-dom';

import LogIn from '../view/LogIn';
import UserList from '../view/UserList';
import TaskList from '../view/Task';

const routes: RouteProps[] = [
  {
    path: '/',
    Component: LogIn
  },
  {
    path: '/users',
    Component: UserList,
  },
  {
    path: '/tasks',
    Component: TaskList,
  },
];

export default routes;
