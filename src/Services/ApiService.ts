import axios, { AxiosRequestConfig } from "axios";
import { useAuthStore } from "../Store/authStore";
import { jwtObject } from "../modules/LoginRegister/Types/SignTypes";
import { jwtDecode } from "jwt-decode";

const ApiService = {
  currentUser: null as jwtObject | null,
  init(baseURL: any) {
    axios.defaults.baseURL = baseURL;
    axios.defaults.withCredentials = true;

    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const { data } = await this.refreshAccessToken();
            console.log("data ->", data);

            this.setAuthHeader(data.accessToken);
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${data.accessToken}`;
            console.log(originalRequest);

            return axios(originalRequest);
          } catch (refreshError) {
            this.removeToken();
            useAuthStore().isLoggedIn(false);
            throw refreshError;
          }
        }
        return Promise.reject(error);
      }
    );
  },

  setAuthHeader(token: string) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("Bearer", token);
    useAuthStore().isLoggedIn(true);
    this.setCurrentUser(token);
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

  setCurrentUser(user: string) {
    this.currentUser = readJwt(user);
  },

  removeCurrentUser() {
    this.currentUser = null;
  },

  getCurrentUser(): jwtObject | null {
    return this.currentUser;
  },

  async refreshAccessToken() {
    return await axios.post(`/api/v1/users/refresh-token`);
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
    useAuthStore().isLoggedIn(false);
    this.removeCurrentUser();
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
function readJwt(token: string): jwtObject {
  const decodedJwt: jwtObject = jwtDecode(token);
  return decodedJwt;
}

export default ApiService;
