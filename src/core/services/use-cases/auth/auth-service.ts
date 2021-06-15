import { AuthRequest } from "core/domain/models/auth/request/auth-request";
import { AuthResponse } from "core/domain/models/auth/response/auth-response";
import { IAuthUseCase } from "core/domain/use-cases/auth/i-auth-use-case";
import { IHttpResponse } from "flawproof";
import { HttpAdapter } from "infra/http/http-adapter";

export const AuthService: IAuthUseCase = class {
  static async handle(authRequest: AuthRequest): Promise<AuthResponse> {
    const response = await HttpAdapter.post<AuthRequest, IHttpResponse>(
      "auth",
      authRequest,
    );

    const authResponse = response.data.body as AuthResponse;

    return Promise.resolve(authResponse);
  }
};
