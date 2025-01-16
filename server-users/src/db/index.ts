import { IUsers } from '../interfaces/user'

export const userData: IUsers = {
  isFetching: false,
  users: [
    {
      id: 0,
      email: 'admin@test.com',
      name: 'Admin'
    },
    {
      id: 3,
      email: 'gonzalez.jezzika@gmail.com',
      name: 'Jessika Gonzalez'
    }
  ]
}
