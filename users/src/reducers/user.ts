import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INITIAL_USER_STATE } from '../interfaces/users';
import { getAllUsers } from '../controllers/users'

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_USER_STATE,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state) => {
        state.isFetching = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isFetching = true;
      });
  },
});

const { setUsers } = usersSlice.actions;

const fetchUsers = createAsyncThunk<any>(
  'fetchUsers',
  async (_, { dispatch }) => {
    const response = await getAllUsers();
    const users = response;

    dispatch(setUsers(users));

    return response;
  }
);

export default usersSlice.reducer;
export { setUsers, fetchUsers };
