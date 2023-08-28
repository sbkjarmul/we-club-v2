require("dotenv").config();
const { ConnectorInterface } = require("../../interfaces/database.interface");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_CONNECTION_STRING;

class MongoConnector extends ConnectorInterface {
  static async connect() {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connection established successfully");
    } catch (error) {
      console.log("MongoDB connection failed: ", error.message);
      process.exit(1);
    }
  }
}

module.exports = MongoConnector;
