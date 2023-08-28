const DatabaseFactory = require("./database.factory");

module.exports = DatabaseFactory.create(process.env.DATABASE);
