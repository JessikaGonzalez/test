import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INITIAL_TASK_STATE } from '../interfaces/task';
import { getAllTasks } from '../controllers/tasks'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_TASK_STATE,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
  },
});

const { setTasks } = tasksSlice.actions;

const fetchTasks = createAsyncThunk<any>(
  'fetchTasks',
  async (_, { dispatch }) => {
    const response = await getAllTasks();
    const { tasks } = response;

    dispatch(setTasks(tasks));

    return response;
  }
);

export default tasksSlice.reducer;
export { setTasks, fetchTasks };
