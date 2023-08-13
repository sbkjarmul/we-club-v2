import { authApi } from "@/infrastructure/api";
import {
  actionTypes,
  registerUserFailure,
  registerUserSuccess,
  loginUserSuccess,
  loginUserFailure,
  setLoader,
} from "@/application/features/auth/auth.action";
import { createMiddleware } from "@/application/helpers";
import { storageService } from "@/infrastructure/services";
import { logoutUserSuccess } from "./auth.action";

const registerUser = createMiddleware(
  actionTypes.REGISTER_USER,
  async (action, dispatch) => {
    dispatch(setLoader(true));
    const response = await authApi.register(action.payload);
    if (response.status === 201) {
      dispatch(registerUserSuccess());
    } else {
      dispatch(registerUserFailure());
    }
    dispatch(setLoader(false));
  }
);

const loginUser = createMiddleware(
  actionTypes.LOGIN_USER,
  async (action, dispatch) => {
    dispatch(setLoader(true));
    const response = await authApi.login(action.payload);
    if (response.status === 200) {
      dispatch(loginUserSuccess(response.data));
      storageService.save("userInfo", response.data);
    } else {
      dispatch(loginUserFailure());
      storageService.clear("userInfo", response.data);
    }
    dispatch(setLoader(false));
  }
);

const logoutUser = createMiddleware(
  actionTypes.LOGOUT_USER,
  async (action, dispatch) => {
    dispatch(logoutUserSuccess());
    storageService.clear("userInfo");
  }
);

export default [registerUser, loginUser, logoutUser];
