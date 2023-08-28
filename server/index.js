const db = require("./database");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const userRoutes = require("./modules/user/user.routes");
const chatRoutes = require("./modules/chat/chat.routes");
const messageRoutes = require("./modules/message/message.routes");

const app = express();
const port = process.env.PORT || 5001;

db.connect();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
