import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

class httpClient {
  async get(url, params = {}) {
    try {
      const response = await axiosClient.get(url, { params });
      return response;
    } catch (error) {
      return parseAxiosError(error);
    }
  }
  async post(url, data) {
    try {
      const response = await axiosClient.post(url, data);
      return response;
    } catch (error) {
      return parseAxiosError(error);
    }
  }
  async patch(url, data) {
    try {
      const response = await axiosClient.patch(url, data);
      return response;
    } catch (error) {
      return parseAxiosError(error);
    }
  }
  async delete(url) {
    try {
      const response = await axiosClient.delete(url);
      return response;
    } catch (error) {
      return parseAxiosError(error);
    }
  }
}

function parseAxiosError(error) {
  return {
    status: error.response.status,
    message: error.message,
  };
}

export default new httpClient();
