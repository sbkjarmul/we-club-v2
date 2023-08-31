const { CHAT_ERRORS } = require("./chat.constants");
const ChatMapper = require("./chat.mapper");

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
        return ChatMapper.toEntity(chat);
      }

      const newChat = await this.chatsTable.create({
        members: [firstId, secondId],
      });
      const chatEntity = ChatMapper.toEntity(newChat);
      return chatEntity;
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

    const chatsEntities = ChatMapper.toEntity(chats);
    return chatsEntities;
  }

  async findChat(firstId, secondId) {
    const chat = await this.chatsTable.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (!chat) {
      throw new Error(CHAT_ERRORS.CHAT_NOT_FOUND);
    }

    const chatEntity = ChatMapper.toEntity(newChat);
    return chatEntity;
  }
}

module.exports = ChatRepository;
