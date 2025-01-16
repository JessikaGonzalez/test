import { configureStore } from '@reduxjs/toolkit';

import usersSlice from '../reducers/user'
import logInSlice from '../reducers/login'
import tasksSlice from '../reducers/task'

export const store = configureStore({
  reducer: {
    usersSlice,
    logInSlice,
    tasksSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
