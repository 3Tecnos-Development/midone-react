import { IUseCase } from "core/common/use-cases/i-use-case";
import { AuthRequest } from "core/domain/models/auth/request/auth-request";
import { AuthResponse } from "core/domain/models/auth/response/auth-response";

export interface IAuthUseCase extends IUseCase<AuthRequest, AuthResponse> {
  handle(authRequest: AuthRequest): Promise<AuthResponse>;
}
