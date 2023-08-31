const { ChatEntity } = require("./chat.entity");

class ChatMapper {
  static toDto(chat) {
    return {
      id: chat.id,
      members: chat.members,
      createdAt: chat.createdAt,
      updatedAt: chat.updatedAt,
    };
  }

  static toEntity(chat) {
    if (!chat) return null;

    if (Array.isArray(chat)) {
      return chat.map((c) => new ChatEntity(c._id, c.members, c.createdAt));
    }

    return new ChatEntity(chat._id, chat.members, chat.createdAt);
  }
}

module.exports = ChatMapper;
