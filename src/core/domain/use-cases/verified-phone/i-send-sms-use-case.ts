import { IUseCase } from "core/common/use-cases/i-use-case";

export interface ISendSMSUseCase extends IUseCase<string, void> {
  handle(phoneNumber: string): Promise<void>;
}
