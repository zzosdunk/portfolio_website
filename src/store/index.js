import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import languageReducer from "./language";

const store = configureStore({
  reducer: { auth: authReducer, lang: languageReducer },
});

export default store;
