import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth.slice";
import middlewares from "./middleware";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [...middlewares],
});

export default store;
