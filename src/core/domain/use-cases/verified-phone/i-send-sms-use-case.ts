export interface ISendSMSUseCase {
  sendTo(phoneNumber: string): Promise<void>;
}
