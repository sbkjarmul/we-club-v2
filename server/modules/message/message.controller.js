const db = require("../../database");
const MessageService = require("./message.service");
const MessageRepository = require("./message.repository");
const asyncHandler = require("express-async-handler");

class MessageController {
  constructor(messageService) {
    this.messageService = messageService;
  }

  createMessage = asyncHandler(async (req, res) => {
    const { chatId, senderId, text } = req.body;

    const message = await this.messageService.createMessage({
      chatId,
      senderId,
      text,
    });

    res.status(200).json(message);
  });

  findMessages = asyncHandler(async (req, res) => {
    const chatId = req.params.chatId;

    const messages = this.messageService.findMessages({ chatId });

    res.status(200).json(messages);
  });
}

module.exports = new MessageController(
  new MessageService(new MessageRepository(db.messages))
);
