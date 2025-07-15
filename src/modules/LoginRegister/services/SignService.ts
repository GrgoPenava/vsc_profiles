//@ts-ignore
import { AxiosResponse } from "axios";
import ApiService from "../../../Services/ApiService";
import { Login, LoginResponse } from "../Types/SignTypes";
import { Register, RegisterResponse } from "../Types/SignTypes";

export default class SignService {
  async login(creds: Login): Promise<LoginResponse> {
    try {
      creds.username = "admin";
      creds.password = "Password1";
      const response = await ApiService.post(`api/v1/users/login`, creds);
      if (response.status === 200) {
        ApiService.setAuthHeader(response.data.accessToken);
      }
      return response.data;
    } catch (error: AxiosResponse | any) {
      throw error.response.data;
    }
  }

  async register(creds: Register): Promise<RegisterResponse> {
    try {
      const response = await ApiService.post(`api/v1/users/register`, creds);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }

  async test(): Promise<any> {
    await ApiService.get(`api/v1/users`);
    const us = ApiService.getCurrentUser();
    return us;
  }

  async logout(): Promise<any> {
    await ApiService.removeToken();
  }
}
