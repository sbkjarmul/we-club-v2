class DatabaseInterface {
  chat;
  user;
  message;
  connect() {}
}

class DataTableInterface {
  create() {}
  findOne() {}
  findMany(query, select) {}
  findById() {}
}

class ConnectorInterface {
  static connect() {}
}

module.exports = { DatabaseInterface, DataTableInterface, ConnectorInterface };
