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

function createActionWithPayload(type) {
  return (data) => ({
    type: type,
    payload: data,
  });
}

export { createMiddleware, createActionWithPayload };
