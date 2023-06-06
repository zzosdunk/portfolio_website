import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDarkTheme: true };

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme(state, action) {
            // eslint-disable-next-line no-param-reassign
            state.isDarkTheme = action.payload;
        },
    },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
