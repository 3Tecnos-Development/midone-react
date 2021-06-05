import { ISendSMSUseCase } from "core/domain/use-cases/verified-phone";
import { HttpAdapter } from "infra/http/http-adapter";

export const SendSMSService: ISendSMSUseCase = class {
  static async handle(phoneNumber: string): Promise<void> {
    await HttpAdapter.post("sms/send-to-confirmation", {
      phoneNumber,
    });

    return Promise.resolve();
  }
};
