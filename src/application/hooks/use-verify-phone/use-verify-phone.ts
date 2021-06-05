import { ConfirmCodeService } from "core/services/use-cases/verified-phone/confirm-code";
import { SendSMSService } from "core/services/use-cases/verified-phone/send-sms";

interface IVerifyPhone {
  sendSMS: () => Promise<void>;
  confirmCode: (verificationCode: string) => Promise<boolean>;
}

export const useVerifyPhone = (phoneNumber: string): IVerifyPhone => {
  const sendSMS = async (): Promise<void> => {
    await SendSMSService.handle(phoneNumber);
  };

  const confirmCode = async (
    verificationCode: string,
    twoFactor?: boolean,
  ): Promise<boolean> => {
    const { verified } = await ConfirmCodeService.handle({
      phoneNumber,
      verificationCode,
      twoFactor,
    });

    return Promise.resolve(verified);
  };

  return {
    sendSMS,
    confirmCode,
  };
};
