import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false, userEmail: "" };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = true;
      // eslint-disable-next-line no-param-reassign
      state.userEmail = action.payload;
    },
    logout(state) {
    // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
