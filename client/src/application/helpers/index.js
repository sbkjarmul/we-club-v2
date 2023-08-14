function createMiddleware(actionType, asyncAction, ...args) {
  return (store) => (next) => async (action) => {
    const dispatch = store.dispatch;
    const state = store.getState();
    if (action.type === actionType) {
      await asyncAction(action, dispatch, state, ...args);
    }

    return next(action);
  };
}

export { createMiddleware };
