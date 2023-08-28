const Tables = require("./tables");
const MongoConnector = require("./mongo.connector");

module.exports = {
  ...Tables,
  MongoConnector,
};
