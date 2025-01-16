export interface ITask {
  _id: number;
  title: string;
  description: string;
  state: string;
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
