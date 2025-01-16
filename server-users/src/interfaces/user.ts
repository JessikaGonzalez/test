export interface IUsers {
  users: IUser[];
  isFetching: boolean;
}

export interface IUser {
  id?: number;
  email: string;
  name: string;
}
