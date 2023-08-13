function createMiddleware(actionType, asyncAction, ...args) {
  return (store) => (next) => async (action) => {
    if (action.type === actionType) {
      await asyncAction(action, store.dispatch, ...args);
    }

    return next(action);
  };
}

export { createMiddleware };
