class ChatEntity {
  constructor(id, members, createdAt) {
    this.id = id;
    this.members = members;
    this.createdAt = createdAt;
  }
}

module.exports = {
  ChatEntity,
};
