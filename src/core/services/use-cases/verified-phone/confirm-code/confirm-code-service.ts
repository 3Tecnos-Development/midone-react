/* eslint-disable @typescript-eslint/indent */
import { ConfirmCodeRequest } from "core/domain/models/verified-phone/confirm-code/request/confirm-code-request";
import { ConfirmCodeResponse } from "core/domain/models/verified-phone/confirm-code/response/confirm-code-response";
import { IConfirmCodeUseCase } from "core/domain/use-cases/verified-phone/i-confirm-code-use-case";
import { IHttpResponse } from "flawproof";
import { HttpAdapter } from "infra/http/http-adapter";

export const ConfirmCodeService: IConfirmCodeUseCase = class {
  static async handle(
    confirmCodeRequest: ConfirmCodeRequest,
  ): Promise<ConfirmCodeResponse> {
    const response = await HttpAdapter.post<ConfirmCodeRequest, IHttpResponse>(
      "sms/confirm-code",
      confirmCodeRequest,
    );

    const { verified } = response.data.body as ConfirmCodeResponse;

    return Promise.resolve({ verified });
  }
};
