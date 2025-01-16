export interface IUsers {
  users: IUser[];
  isFetching: boolean;
}

export interface IUser {
  id?: number;
  email: string;
  name: string;
}

export const INITIAL_USER_STATE: IUsers = {
  users: [],
  isFetching: false
};

export interface filterUsersProps {
  user: IUser;
  onChange(type: string, value: string): void
}
