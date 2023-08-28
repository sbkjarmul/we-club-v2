const express = require("express");
const { createMessage, findMessages } = require("./message.controller");

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", findMessages);

module.exports = router;
