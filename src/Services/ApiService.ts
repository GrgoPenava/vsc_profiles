import axios, { AxiosRequestConfig } from "axios";

const ApiService = {
  init(baseURL: any) {
    axios.defaults.baseURL = baseURL;
    axios.defaults.withCredentials = true;
  },
  setAuthHeader(token: string) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("Bearer", token);
  },
  getBaseUrl() {
    return axios.defaults.baseURL;
  },
  getAuthHeader() {
    return axios.defaults.headers.common["Authorization"];
  },
  get(resource: string, config?: AxiosRequestConfig) {
    return axios.get(resource, config);
  },
  async post(resource: string, data: object, config?: AxiosRequestConfig) {
    try {
      return await axios.post(resource, data, config);
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
  put(resource: string, data: object) {
    return axios.put(resource, data);
  },
  delete(resource: string, data?: object) {
    return axios.delete(resource, { data: data });
  },
  patch(resource: string, data: object) {
    return axios.patch(resource, data, {
      headers: {
        "Content-Type": "application/json-patch+json",
      },
    });
  },
  async readTokenFromStorage(): Promise<boolean> {
    const token = localStorage.getItem("Bearer");
    if (token && typeof token === "string") {
      try {
        const response = await this.verifyLogin(token);
        if (response.status === 200) {
          this.setAuthHeader(token);
          return true;
        } else {
          this.removeToken();
        }
      } catch (error) {
        this.removeToken();
      }
    }
    return false;
  },
  async verifyLogin(token: string) {
    return await this.post("api/v1/users/verify", { jwt: token });
  },
  removeToken() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("Bearer");
  },
};

function handleError(error: any) {
  if (axios.isAxiosError(error)) {
    console.error("API Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
  } else {
    console.error("Unexpected Error:", error);
  }
}

export default ApiService;
