import { IUseCase } from "core/common/use-cases/i-use-case";
import { UserExistsResponse } from "core/domain/models/user/user-exists/response/user-exists-response";

export interface IUserExistsUseCase
  extends IUseCase<string, UserExistsResponse> {
  handle(userName: string): Promise<UserExistsResponse>;
}
