const express = require("express");
const db = require("../../database");
const MessageService = require("./message.service");
const MessageRepository = require("./message.repository");
const MessageController = require("./message.controller");

const messageRepository = new MessageRepository(db.messages);
const messageService = new MessageService(messageRepository);
const messageController = new MessageController(messageService);

const router = express.Router();

router.post("/", messageController.createMessage);
router.get("/:chatId", messageController.findMessages);

module.exports = router;
