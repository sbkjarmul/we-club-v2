function asyncActionWrapper(actionType, asyncAction) {
  return ({ dispatch }) =>
    (next) =>
    async (action) => {
      if (action.type === actionType) {
        await asyncAction(action, dispatch);
      }

      return next(action);
    };
}

export { asyncActionWrapper };
