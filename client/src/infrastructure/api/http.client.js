import axios from "axios";

const API_URL = "http://localhost:5000/api";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

class HttpClient {
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
    status: !error.response ? 500 : error.response.status,
    message: error.message,
  };
}

export default new HttpClient();
