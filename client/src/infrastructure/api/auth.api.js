import httpClient from "./client";

class AuthApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async login(credentials) {
    const response = await this.httpClient.post("/auth/login", credentials);
    return response;
  }

  async register(credentials) {
    const response = await this.httpClient.post("/auth/register", credentials);
    console.log("Register response: ", response);
    return response;
  }

  async logout() {
    const response = await this.httpClient.post("/auth/logout");
    return response;
  }
}

export default new AuthApi(httpClient);
