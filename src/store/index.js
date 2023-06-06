import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import languageReducer from "./language";
import themeReducer from "./theme";

const store = configureStore({
    reducer: { auth: authReducer, lang: languageReducer, theme: themeReducer },
});

export default store;
