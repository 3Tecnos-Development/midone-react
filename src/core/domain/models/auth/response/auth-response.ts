export type UserResponse = {
  name: string;
  userName: string;
  email: string;
  phoneNumber: string;
};

export type TokenResponse = {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  idToken: string;
  expiresIn: number;
};

export type AuthResponse = {
  user: UserResponse;
  token: TokenResponse;
};
