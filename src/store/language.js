import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "English" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.language = action.payload;
    },
  },
});

export const langActions = languageSlice.actions;

export default languageSlice.reducer;
