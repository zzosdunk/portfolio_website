import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "English" };

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage(state, action) {
            state.language = action.payload;
        }
    }
})
  
export const langActions = languageSlice.actions;

export default languageSlice.reducer;