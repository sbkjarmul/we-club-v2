import httpClient from "./client";

class ChatApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getUserChats(userId) {
    const response = await this.httpClient.get(`/chat/${userId}`);
    return response;
  }

  async createChat(data) {
    const response = await this.httpClient.post("/chat", data);
    return response;
  }

  async getMessages(chatId) {
    const response = await this.httpClient.get(`/messages/${chatId}`);
    return response;
  }
}

export default new ChatApi(httpClient);
