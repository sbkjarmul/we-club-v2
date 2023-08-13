import { authApi } from "@/infrastructure/api";
import {
  actionTypes,
  registerUserFailure,
  registerUserSuccess,
} from "@/application/features/auth/auth.action";
import { asyncActionWrapper } from "@/application/helpers";

const registerUser = asyncActionWrapper(
  actionTypes.REGISTER_USER,
  async (action, dispatch) => {
    const response = await authApi.register(action.payload);
    if (response.status === 200) {
      dispatch(registerUserSuccess());
    } else {
      dispatch(registerUserFailure());
    }
  }
);

export default [registerUser];
