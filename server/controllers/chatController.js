const Chat = require("../models/chatModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createChat = asyncHandler(async (req, res) => {
  const { firstId, secondId } = req.body;

  const chat = await Chat.findOne({
    members: { $all: [firstId, secondId] },
  });

  if (chat) {
    return res.status(200).json(chat);
  }

  const newChat = new Chat({ members: [firstId, secondId] });

  const response = await newChat.save();

  return res.status(200).json(response);
});

const findUserChats = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  const chats = await Chat.find({ members: { $in: [userId] } });

  return res.status(200).json(chats);
});

const findChat = asyncHandler(async (req, res) => {
  const { firstId, secondId } = req.params;

  const chats = await Chat.findOne({ members: { $all: [firstId, secondId] } });

  return res.status(200).json(chats);
});

module.exports = { createChat, findUserChats, findChat };
