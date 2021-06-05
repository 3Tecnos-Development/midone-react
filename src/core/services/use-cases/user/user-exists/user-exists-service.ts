import { UserExistsResponse } from "core/domain/models/user/user-exists/response/user-exists-response";
import { IUserExistsUseCase } from "core/domain/use-cases/user";
import { IHttpResponse } from "flawproof";
import { HttpAdapter } from "infra/http/http-adapter";

export const UserExistsService: IUserExistsUseCase = class {
  static async handle(userName: string): Promise<UserExistsResponse> {
    const response = await HttpAdapter.get<IHttpResponse>(
      `users/${userName}/exists`,
    );

    return Promise.resolve(
      (response.data.body as unknown) as UserExistsResponse,
    );
  }
};
