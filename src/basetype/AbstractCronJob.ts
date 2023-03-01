import cron from 'node-cron';
import { OperationStatus } from '../constants/enums/OperationStatus';
import { ILog } from '../interfaces/ILog';

export default abstract class AbstractCronJob {
    protected readonly schedulePattern: string;
    protected readonly logger: ILog;
  
    constructor(schedulePattern: string, logger: ILog) {
      this.schedulePattern = schedulePattern;
      this.logger = logger;
    }
  
    public start(): void {
      cron.schedule(this.schedulePattern, async () => {
        try {
          await this.doJob();
          this.logger.log('Job executado com sucesso', OperationStatus.SUCCESS, new Date());
        } catch (error) {
          this.logger.log('Job executado com sucesso', OperationStatus.SUCCESS, new Date());
        }
      });
    }
  
    protected abstract doJob(): Promise<void>;
}
