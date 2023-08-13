import { authApi } from "@/infrastructure/api";
import {
  actionTypes,
  registerUserFailure,
  registerUserSuccess,
  loginUserSuccess,
  loginUserFailure,
} from "@/application/features/auth/auth.action";
import { asyncActionWrapper } from "@/application/helpers";
import { storageService } from "@/infrastructure/services";
import { logoutUserSuccess } from "./auth.action";

const registerUser = asyncActionWrapper(
  actionTypes.REGISTER_USER,
  async (action, dispatch) => {
    const response = await authApi.register(action.payload);
    if (response.status === 201) {
      dispatch(registerUserSuccess());
    } else {
      dispatch(registerUserFailure());
    }
  }
);

const loginUser = asyncActionWrapper(
  actionTypes.LOGIN_USER,
  async (action, dispatch) => {
    const response = await authApi.login(action.payload);
    if (response.status === 200) {
      dispatch(loginUserSuccess(response.data));
      storageService.save("userInfo", response.data);
    } else {
      dispatch(loginUserFailure());
      storageService.clear("userInfo", response.data);
    }
  }
);

const logoutUser = asyncActionWrapper(
  actionTypes.LOGOUT_USER,
  async (action, dispatch) => {
    dispatch(logoutUserSuccess());
    storageService.clear("userInfo");
  }
);

export default [registerUser, loginUser, logoutUser];
