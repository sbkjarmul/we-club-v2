const mongoose = require("mongoose");
const uri = process.env.MONGODB_CONNECTION_STRING;

const connectDb = async () => {
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
};

module.exports = connectDb;
