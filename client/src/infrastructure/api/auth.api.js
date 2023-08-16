import httpClient from "./http.client";

class AuthApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async register(data) {
    const response = await this.httpClient.post("/users/register", data);
    return response;
  }

  async login(credentials) {
    const response = await this.httpClient.post("/users/login", credentials);
    return response;
  }

  async logout() {
    const response = await this.httpClient.post("/users/logout");
    return response;
  }
}

export default new AuthApi(httpClient);
