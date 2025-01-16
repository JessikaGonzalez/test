import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INITIAL_LOG_IN_STATE } from '../interfaces/logIn';
import { logInUser } from '../controllers/auth'

const logInSlice = createSlice({
  name: 'login',
  initialState: INITIAL_LOG_IN_STATE,
  reducers: {
    setLogIn(state, action) {
      state.email = action.payload;
      state.success = true;
    },
    setLogOut(state) {
      state.email = '';
      state.success = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.fulfilled, (state) => {
        state.success = true;
      })
      .addCase(fetchUser.pending, (state) => {
        state.success = false;
      });
  },
});

const { setLogIn, setLogOut } = logInSlice.actions;

const fetchUser = createAsyncThunk<any, string>(
  'fetchUser',
  async (email, { dispatch }) => {
    const response = await logInUser(email);
    const user = response;

    dispatch(setLogIn(user));

    return response;
  }
);

export default logInSlice.reducer;
export { setLogIn, fetchUser, setLogOut };
