const asyncHandler = require("express-async-handler");

class ChatController {
  constructor(chatService) {
    this.chatService = chatService;
  }

  createChat = asyncHandler(async (req, res) => {
    const { firstId, secondId } = req.body;

    const chat = await this.chatService.createChat(firstId, secondId);

    return res.status(200).json(chat);
  });

  findUserChats = asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    const chats = await this.chatService.findManyChats(userId);

    return res.status(200).json(chats);
  });

  findChat = asyncHandler(async (req, res) => {
    const { firstId, secondId } = req.params;

    const chat = await this.chatService.findChat(firstId, secondId);

    return res.status(200).json(chat);
  });
}

module.exports = ChatController;
