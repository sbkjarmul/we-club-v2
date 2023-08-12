import { authApi } from "@/infrastructure/api";
import { authActions } from "@/application";

export const register = (registerInfo) => async (dispatch) => {
  dispatch(authActions.setIsLoading(true));

  const response = await authApi.register(registerInfo);

  if (response.status === 200) {
    dispatch(registerSuccess());
  } else {
    dispatch(registerFailure());
  }
};

export const registerSuccess = () => (dispatch) => {
  dispatch(authActions.setIsLoading(false));
};

export const registerFailure = () => (dispatch) => {
  dispatch(authActions.setIsLoading(false));
};
