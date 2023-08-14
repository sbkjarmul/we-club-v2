import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./features/auth/auth.reducer";
import chatReducer from "./features/chat/chat.reducer";
import middlewares from "./middlewares";

const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
  middleware: [...middlewares, thunk],
});

export default store;
