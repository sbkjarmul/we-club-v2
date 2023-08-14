const Message = require("../models/messageModel");
const asyncHandler = require("express-async-handler");

const createMessage = asyncHandler(async (req, res) => {
  const { chatId, sender, text } = req.body;

  const message = new Message({
    chatId,
    sender,
    text,
  });

  const response = await message.save();

  return res.status(200).json(response);
});

const findMessages = asyncHandler(async (req, res) => {
  const chatId = req.params.chatId;

  const messages = await Message.find({ chatId });
  res.status(200).json(messages);
});

module.exports = { createMessage, findMessages };
