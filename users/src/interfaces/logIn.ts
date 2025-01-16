export interface ILogIn {
  email: string;
  success: boolean,
}

export const INITIAL_LOG_IN_STATE: ILogIn = {
  email: '',
  success: false
};
