export type Login = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token?: string | null;
  message: string;
};

export type Register = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type RegisterResponse = {
  message: string;
};
