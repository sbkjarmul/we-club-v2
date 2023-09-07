class MessageService {
  constructor(messageRepository) {
    this.messageRepository = messageRepository;
  }

  async createMessage(chatId, senderId, text) {
    try {
      const createdMessage = await this.messageRepository.createMessage(
        chatId,
        senderId,
        text
      );
      return createdMessage;
    } catch (error) {
      throw new Error(error.message);
    }
    s;
  }

  async findMessages(chatId) {
    try {
      const messages = await this.messageRepository.findManyMessages(chatId);
      return messages;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = MessageService;
