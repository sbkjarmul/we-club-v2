const MongoDataTable = require("../mongo.adapter");
const ChatModel = require("../models/chat.model");

class ChatTable extends MongoDataTable {
  constructor() {
    super(ChatModel);
  }
}

module.exports = ChatTable;
