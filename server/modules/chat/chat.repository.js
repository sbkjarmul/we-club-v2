const { CHAT_ERRORS } = require("./chat.constants");

class ChatRepository {
  constructor(chatsTable) {
    this.chatsTable = chatsTable;
  }

  async createChat(firstId, secondId) {
    try {
      const chat = this.chatsTable.findOne({
        members: { $all: [firstId, secondId] },
      });

      if (chat) {
        return chat;
      }

      const newChat = await this.chatsTable.create({
        members: [firstId, secondId],
      });

      return newChat;
    } catch (error) {
      throw new Error(CHAT_ERRORS.UNABLE_TO_CREATE_CHAT);
    }
  }

  async findManyChats(userId) {
    const chats = await this.chatsTable.findMany({
      members: { $in: [userId] },
    });

    if (!chats) {
      throw new Error(CHAT_ERRORS.CHAT_NOT_FOUND);
    }

    return chats;
  }

  async findChat(firstId, secondId) {
    const chat = await this.chatsTable.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (!chat) {
      throw new Error(CHAT_ERRORS.CHAT_NOT_FOUND);
    }

    return chat;
  }
}

module.exports = ChatRepository;
