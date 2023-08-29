class MessageService {
  constructor(messageRepository) {
    this.messageRepository = messageRepository;
  }

  async createMessage(message) {
    try {
      const createdMessage = await this.messageRepository.createMessage(
        message
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
