const db = require("../../database");
const express = require("express");

const ChatService = require("./chat.service");
const ChatController = require("./chat.controller");
const ChatRepository = require("./chat.repository");

const chatRepository = new ChatRepository(db.chats);
const chatService = new ChatService(chatRepository);
const chatController = new ChatController(chatService);

const router = express.Router();

router.post("/", chatController.createChat);
router.get("/:userId", chatController.findUserChats);
router.get("/find/:firstId/:secondId", chatController.findChat);

module.exports = router;
