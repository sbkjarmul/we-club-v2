class DatabaseInterface {
  chat;
  user;
  message;
}

class DataTableInterface {
  create() {}
  findOne() {}
  findMany() {}
  findById() {}
}

class ConnectorInterface {
  static connect() {}
}

module.exports = { DatabaseInterface, DataTableInterface, ConnectorInterface };
