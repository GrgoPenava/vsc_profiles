//@ts-ignore
import { AxiosResponse } from "axios";
import ApiService from "../../../Services/ApiService";
import { Login, LoginResponse } from "../Types/UserTypes";

export default class LoginService {
  async login(creds: Login): Promise<LoginResponse> {
    const response = await ApiService.post(`api/v1/users/login`, creds);
    ApiService.setAuthHeader(response.data.token);
    return response.data;
  }

  async test(): Promise<any> {
    const response = await ApiService.get(`api/v1/users`);
    return response.data;
  }
}
