import axios, { AxiosRequestConfig } from "axios";

const ApiService = {
  init(baseURL: any) {
    axios.defaults.baseURL = baseURL;
    axios.defaults.withCredentials = true;
  },
  setAuthHeader(token: string) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  getBaseUrl() {
    return axios.defaults.baseURL;
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
