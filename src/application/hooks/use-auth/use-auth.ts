/* eslint-disable @typescript-eslint/indent */
import { useState } from "react";
import { AuthService } from "core/services/use-cases/auth/auth-service";
import { TokenResponse, UserResponse } from "core/domain/models/auth/response/auth-response";

export interface IUserInfo {
  user: UserResponse;
  token: TokenResponse;
}

interface INotAuthorized {
  message: string;
}

interface IUseAuth {
  loading: boolean;
  authenticated: boolean;
  userInfo: IUserInfo | undefined;
  notAuthorized: INotAuthorized | undefined;
  auth: (userName: string, password: string) => Promise<void>;
}

export const useAuth = (): IUseAuth => {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [notAuthorized, setNotAuthorized] = useState<INotAuthorized | undefined>(undefined);
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);

  const auth = async (userName: string, password: string): Promise<void> => {
    if (!loading) {
      setLoading(true);
      try {
        const authResponse = await AuthService.handle({ userName, password });
        setUserInfo({
          user: authResponse.user,
          token: authResponse.token,
        });
        setAuthenticated(true);
      } catch (error) {
        if (error.response && error.response.data) {
          const { body, statusCode } = error.response.data;
          if (statusCode === 400) {
            const message = body.description;
            setNotAuthorized({
              message,
            });
          }
        } else {
          setNotAuthorized({
            message: "Falha na autenticação",
          });
        }
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    return Promise.resolve();
  };

  return {
    loading,
    authenticated,
    userInfo,
    notAuthorized,
    auth,
  };
};
