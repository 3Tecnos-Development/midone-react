export type ConfirmCodeRequest = {
  phoneNumber: string;
  verificationCode: string;
  twoFactor?: boolean;
};
