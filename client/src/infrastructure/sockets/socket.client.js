import { io } from "socket.io-client";

class Socket {
  constructor() {
    this.socket = null;
  }

  connect(url) {
    if (!this.socket) {
      console.log(url);
      this.socket = io(url);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  send(message) {
    if (this.socket) {
      this.socket.send(JSON.stringify(message));
    }
  }

  on(eventName, callback) {
    if (this.socket) {
      this.socket.on(eventName, callback);
    }
  }

  off(eventName, callback) {
    if (this.socket) {
      this.socket.off(eventName, callback);
    }
  }

  emit(eventName, data) {
    if (this.socket) {
      this.socket.emit(eventName, data);
    }
  }
  removeAllListeners(listeners = null) {
    this.socket.removeAllListeners(listeners);
  }
}

export default new Socket();
