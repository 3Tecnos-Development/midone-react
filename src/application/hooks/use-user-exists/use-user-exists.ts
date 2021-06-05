import { UserExistsService } from "core/services/use-cases/user";

interface IUseUser {
  userExists: (userName: string) => Promise<boolean>;
}

export const useUserExists = (): IUseUser => {
  const userExists = async (userName: string): Promise<boolean> => {
    const { exists } = await UserExistsService.handle(userName);
    return Promise.resolve(exists);
  };

  return {
    userExists,
  };
};
