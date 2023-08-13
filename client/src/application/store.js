import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./features/auth/auth.reducer";
import middlewares from "./middlewares";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [...middlewares, thunk],
});

export default store;
