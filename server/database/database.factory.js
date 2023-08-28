const mongo = require("./mongo");
const { DatabaseInterface } = require("../interfaces");

class Database extends DatabaseInterface {
  constructor(chats, users, messages, connect) {
    super();
    this.chats = chats;
    this.users = users;
    this.messages = messages;
    this.connect = connect;
  }
}

class DatabaseFactory {
  static create(type) {
    switch (type) {
      case "mongodb":
        return new Database(
          new mongo.ChatTable(),
          new mongo.UserTable(),
          new mongo.MessageTable(),
          mongo.MongoConnector.connect
        );
      default:
        return new Database(
          new mongo.ChatTable(),
          new mongo.UserTable(),
          new mongo.MessageTable(),
          mongo.MongoConnector.connect
        );
    }
  }
}

module.exports = DatabaseFactory;
