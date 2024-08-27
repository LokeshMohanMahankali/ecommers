import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cart",
  initialState: {
    currentuser: null,
    isFetching: false,
    error: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSucces: (state, action) => {
      state.isFetching = false;
      state.currentuser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSucces, loginFailure } = userSlice.actions;
export default userSlice.reducer;
