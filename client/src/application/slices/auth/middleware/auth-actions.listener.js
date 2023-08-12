import { authApi } from "@/infrastructure/api";
import { authActions } from "@/application";
import { actionTypes } from "@/application/slices/auth/actions";

export default {
  [actionTypes.REGISTER]: async (action, dispatch) => {
    console.log("REGISTER LISTENER!!!!");
    dispatch(authActions.setIsLoading(true));

    const response = await authApi.register(action.payload);

    if (response.status === 200) {
      dispatch(authActions.registerSuccess());
    } else {
      dispatch(authActions.registerFailure());
    }
  },
};
