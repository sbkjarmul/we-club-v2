import { logger } from "./logger.middleware";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];

export default middlewares;
