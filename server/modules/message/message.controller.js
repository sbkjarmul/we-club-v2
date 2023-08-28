const db = require("../../database");

const asyncHandler = require("express-async-handler");

const createMessage = asyncHandler(async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const message = await db.messages.create({
    chatId,
    senderId,
    text,
  });

  return res.status(200).json(message);
});

const findMessages = asyncHandler(async (req, res) => {
  const chatId = req.params.chatId;

  const messages = await db.messages.findMany({ chatId });
  res.status(200).json(messages);
});

module.exports = { createMessage, findMessages };
