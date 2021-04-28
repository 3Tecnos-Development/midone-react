import { IUserExistsUseCase } from "core/domain/use-cases/user";
import { IHttpResponse } from "flawproof";
import { HttpAdapter } from "infra/http/http-adapter";

type Result = {
  exists: boolean;
};

export const UserExistsService: IUserExistsUseCase = class {
  static async exists(userName: string): Promise<boolean> {
    const response = await HttpAdapter.get<IHttpResponse>(
      `users/${userName}/exists`,
    );
    const { exists } = (response.data.body as unknown) as Result;
    return Promise.resolve(exists);
  }
};
