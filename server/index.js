const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const dotenv = require("dotenv").config();
const connectDb = require("./config/database");

connectDb();

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
