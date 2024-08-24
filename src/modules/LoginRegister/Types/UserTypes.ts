export type Login = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token?: string | null;
  message: string;
};
