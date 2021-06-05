export interface IUseCase<TUseCasePort, TUseCaseResult = void> {
  handle(port?: TUseCasePort): Promise<TUseCaseResult>;
}
