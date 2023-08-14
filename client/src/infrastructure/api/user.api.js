import httpClient from "./client";

class UserApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async findUser(userId) {
    const response = await this.httpClient.get(`/users/find/${userId}`);
    return response;
  }

  async getAllUsers() {
    const response = await this.httpClient.get("/users/");
    return response;
  }
}

export default new UserApi(httpClient);
