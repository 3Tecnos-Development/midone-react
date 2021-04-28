export interface IUserExistsUseCase {
  exists(userName: string): Promise<boolean>;
}
