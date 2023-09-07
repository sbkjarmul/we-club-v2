const { MESSAGES_ERRORS } = require("./message.constants");
const MessageMapper = require("./message.mapper");

class MessageRepository {
  constructor(messageTable) {
    this.messageTable = messageTable;
  }

  async createMessage(chatId, senderId, text) {
    try {
      const createdMessage = await this.messageTable.create({
        chatId,
        senderId,
        text,
      });
      const messageEntity = MessageMapper.toEntity(createdMessage);
      return messageEntity;
    } catch (error) {
      throw new Error(MESSAGES_ERRORS.CREATE_MESSAGE_FAILED);
    }
  }

  async findManyMessages(chatId) {
    try {
      const messages = await this.messageTable.findMany({ chatId });
      const messagesEntities = MessageMapper.toEntity(messages);
      return messagesEntities;
    } catch (error) {
      console.log(error);
      throw new Error(MESSAGES_ERRORS.FIND_MESSAGES_FAILED);
    }
  }
}

module.exports = MessageRepository;
