import { OperationStatus } from '../constants/enums/OperationStatus';
import { ILog } from '../interfaces/ILog';

export class LoggerConsole implements ILog {
    async log(message: string, status: OperationStatus, date: Date): Promise<void> {
        console.log(`[${date.toISOString()}] ${status} - ${message}`);
    }
}
