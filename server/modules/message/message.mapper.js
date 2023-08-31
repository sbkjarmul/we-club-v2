const { MessageEntity } = require("./message.entity");

class MessageMapper {
  static toDto(message) {
    return {
      id: message.id,
      chatId: message.chatId,
      senderId: message.senderId,
      text: message.text,
    };
  }

  static toEntity(message) {
    if (!message) return null;

    if (Array.isArray(message)) {
      return message.map(
        (m) =>
          new MessageEntity(m._id, m.chatId, m.senderId, m.text, m.createdAt)
      );
    }

    return new MessageEntity(
      message._id,
      message.chatId,
      message.senderId,
      message.text,
      message.createdAt
    );
  }
}

module.exports = MessageMapper;
