import logger from "./logger.middleware";
import authMiddleware from "@/application/features/auth/auth.middleware";
import chatMiddleware from "@/application/features/chat/chat.middleware";

const middlewares = [logger, ...authMiddleware, ...chatMiddleware];

export default middlewares;
