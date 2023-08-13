function asyncActionWrapper(actionType, asyncAction) {
  return (store) => (next) => async (action) => {
    if (action.type === actionType) {
      await asyncAction(action, store.dispatch);
    }

    return next(action);
  };
}

export { asyncActionWrapper };
