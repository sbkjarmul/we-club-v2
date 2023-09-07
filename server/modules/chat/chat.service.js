class ChatService {
  constructor(chatRepository) {
    this.chatRepository = chatRepository;
  }

  async createChat(firstId, secondId) {
    try {
      const chat = await this.chatRepository.createChat(firstId, secondId);
      return chat;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findManyChats(userId) {
    try {
      const chats = await this.chatRepository.findManyChats(userId);

      return chats;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findChat(firstId, secondId) {
    try {
      const chat = await this.chatRepository.findChat(firstId, secondId);

      return chat;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ChatService;
