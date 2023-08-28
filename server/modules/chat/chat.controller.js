const db = require("../../database");
const asyncHandler = require("express-async-handler");

const createChat = asyncHandler(async (req, res) => {
  const { firstId, secondId } = req.body;

  const chat = await db.chats.findOne({
    members: { $all: [firstId, secondId] },
  });

  if (chat) {
    return res.status(200).json(chat);
  }

  const newChat = await db.chats.create({ members: [firstId, secondId] });

  return res.status(200).json(newChat);
});

const findUserChats = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  const chats = await db.chats.findMany({ members: { $in: [userId] } });

  return res.status(200).json(chats);
});

const findChat = asyncHandler(async (req, res) => {
  const { firstId, secondId } = req.params;

  const chat = await db.chats.findOne({
    members: { $all: [firstId, secondId] },
  });

  return res.status(200).json(chat);
});

module.exports = { createChat, findUserChats, findChat };
