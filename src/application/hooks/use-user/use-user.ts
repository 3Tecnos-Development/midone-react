import { UserExistsService } from "core/services/use-cases/user";

interface IUseUser {
  userExists: (userName: string) => Promise<boolean>;
}
export const useUser = (): IUseUser => {
  const userExists = (userName: string): Promise<boolean> => {
    return UserExistsService.exists(userName);
  };

  return {
    userExists,
  };
};
