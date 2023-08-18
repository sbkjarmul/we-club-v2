import socketClient from "./socket.client";

const SOCKET_URL = "http://localhost:3000";

class ChatSocket {
  constructor(socketClient) {
    this.socketClient = socketClient;
  }

  connect(userId) {
    this.socketClient.connect(SOCKET_URL);
    this.socketClient.emit("connectUser", userId);
  }

  disconnect() {
    this.socketClient.removeAllListeners();
    this.socketClient.disconnect();
  }

  listenToMessages(callback) {
    this.socketClient.on("getMessage", callback);
  }

  listenToNotifications(callback) {
    this.socketClient.on("getNotification", callback);
  }

  listenToOnlineUsers(callback) {
    this.socketClient.on("getOnlineUsers", callback);
  }

  sendMessage(message) {
    this.socketClient.emit("sendMessage", message);
  }
}

export default new ChatSocket(socketClient);
