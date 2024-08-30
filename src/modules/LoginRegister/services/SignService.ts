//@ts-ignore
import { AxiosResponse } from "axios";
import ApiService from "../../../Services/ApiService";
import { jwtObject, Login, LoginResponse } from "../Types/SignTypes";
import { Register, RegisterResponse } from "../Types/SignTypes";
import { jwtDecode } from "jwt-decode";
import { useRoleStore } from "../../../Store/roleStore";

export default class SignService {
  async login(creds: Login): Promise<LoginResponse> {
    try {
      const response = await ApiService.post(`api/v1/users/login`, creds);
      if (response.status === 200) {
        ApiService.setAuthHeader(response.data.token);
        console.log("RESS", response.data.token);
        this.readJwtAndStoreValues(response.data.token);
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
    const response = await ApiService.get(`api/v1/users`);
    return response.data;
  }

  readJwtAndStoreValues(token: string) {
    const decodedJwt: jwtObject = jwtDecode(token);
    console.log("DECODED ->", decodedJwt.role);
    /* const roleStore = useRoleStore();
    roleStore.setRole(decodedJwt.role); */
    //roleStore.setRole(jwtDecode(token));
  }
}
