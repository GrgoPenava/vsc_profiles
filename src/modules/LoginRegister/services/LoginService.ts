//@ts-ignore
import { AxiosResponse } from "axios";
import ApiService from "../../../Services/ApiService";
import { Login, LoginResponse } from "../Types/UserTypes";

export default class LoginService {
  async login(creds: Login): Promise<LoginResponse> {
    try {
      const response = await ApiService.post(`api/v1/users/login`, creds);
      if (response.status === 200) {
        ApiService.setAuthHeader(response.data.token);
      }
      return response.data;
    } catch (error: AxiosResponse | any) {
      throw error.response.data;
    }
  }

  async test(): Promise<any> {
    const response = await ApiService.get(`api/v1/users`);
    return response.data;
  }
}
