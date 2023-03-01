import { OperationStatus } from "../constants/enums/OperationStatus";

export interface ILog {
    log(message: string, status: OperationStatus, date: Date): Promise<void>;
}
