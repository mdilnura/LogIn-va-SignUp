import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
       state.user = { login: payload.login, password: payload.password };
    },
    logOut: (state) => {
      state.login = "";
      state.password = "";
    },
  },
});
export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
