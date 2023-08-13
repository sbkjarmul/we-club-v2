const logger = () => (next) => (action) => {
  console.info({ ACTION_TYPE: action.type, PAYLOAD: action.payload });
  return next(action);
};

export default logger;
