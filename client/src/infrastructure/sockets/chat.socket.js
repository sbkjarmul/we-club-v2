import socketClient from "./socket.client";

const SOCKET_URL = "http://localhost:3000";

class ChatSocket {
  constructor(socketClient) {
    this.socketClient = socketClient;
  }

  connect() {
    this.socketClient.connect(SOCKET_URL);
  }

  disconnect() {
    this.socketClient.disconnect;
  }

  send(message) {
    this.socketClient.send(message);
  }

  on(eventName, callback) {
    this.socketClient.on(eventName, callback);
  }

  off(eventName, callback) {
    this.socketClient.off(eventName, callback);
  }

  emit(eventName, data) {
    this.socketClient.emit(eventName, data);
  }
}

export default new ChatSocket(socketClient);
