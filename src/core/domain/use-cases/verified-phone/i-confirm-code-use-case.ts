import { IUseCase } from "core/common/use-cases/i-use-case";
import { ConfirmCodeRequest } from "core/domain/models/verified-phone/confirm-code/request/confirm-code-request";
import { ConfirmCodeResponse } from "core/domain/models/verified-phone/confirm-code/response/confirm-code-response";

export interface IConfirmCodeUseCase
  extends IUseCase<ConfirmCodeRequest, ConfirmCodeResponse> {
  handle(confirmCodeRequest: ConfirmCodeRequest): Promise<ConfirmCodeResponse>;
}
