import logger from "./logger.middleware";
import authMiddleware from "@/application/features/auth/auth.middleware";

const middlewares = [logger, ...authMiddleware];

export default middlewares;
