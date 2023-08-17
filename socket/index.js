const { Server } = require("socket.io");
const { User } = require("./entities/user.entity");

const io = new Server({
  cors: "http://127.0.0.1:5173",
});

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("new connectiom: ", socket.id);

  socket.on("connectUser", (userId) => {
    const isUserOnline = onlineUsers.some((user) => user.id === userId);

    if (!isUserOnline) {
      onlineUsers.push(new User(userId, socket.id));
    }
    io.emit("getOnlineUsers", onlineUsers);
  });

  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find((user) => user.id === message.to);

    if (user) {
      io.to(user.socketId).emit("getMessage", message);
    }
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

    io.emit("getOnlineUsers", onlineUsers);
  });
});

io.listen(3000);
