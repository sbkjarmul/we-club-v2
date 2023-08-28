const MongoDataTable = require("../mongo.adapter");
const UserModel = require("../models/user.model");

class UserTable extends MongoDataTable {
  constructor() {
    super(UserModel);
  }
}

module.exports = UserTable;
