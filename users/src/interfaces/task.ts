export interface ITask {
  _id: number;
  title: string;
  description: string;
  state: string;
  createdAt: Date;
  user: string;
}

export interface ITasks {
  tasks: ITask[];
}

export const INITIAL_TASK_STATE: ITasks = {
  tasks: [],
};

export interface filterTaskProps {
  task: ITask;
  onChange(type: string, value: string): void
}

export enum STATES {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}