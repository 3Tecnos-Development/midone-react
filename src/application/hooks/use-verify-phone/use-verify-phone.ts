import { SendSMSService } from "core/services/use-cases/verified-phone/send-sms";

interface IVerifyPhone {
  sendSMS: () => void;
}
export const useVerifyPhone = (phoneNumber: string): IVerifyPhone => {
  const sendSMS = async (): Promise<void> => {
    await SendSMSService.sendTo(phoneNumber);
  };

  return {
    sendSMS,
  };
};
