const MongoDataTable = require("../mongo.adapter");
const MessageModel = require("../models/message.model");

class MessageTable extends MongoDataTable {
  constructor() {
    super(MessageModel);
  }
}

module.exports = MessageTable;
