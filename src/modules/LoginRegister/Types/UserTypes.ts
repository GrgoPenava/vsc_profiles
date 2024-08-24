export type Login = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  message: string;
};
