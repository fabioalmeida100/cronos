import cron from 'node-cron';
import { OperationStatus } from '../constants/enums/OperationStatus';
import { ILog } from '../interfaces/ILog';

export default abstract class AbstractCronJob {
    protected readonly schedulePattern: string;
    protected readonly logger: ILog;
    protected readonly jobName: string;
  
    constructor(schedulePattern: string, jobName: string, logger: ILog) {
      this.schedulePattern = schedulePattern;
      this.logger = logger;
      this.jobName = jobName;
    }
  
    public start(): void {
      cron.schedule(this.schedulePattern, async () => {
        try {
          await this.doJob();
          this.logger.log(`Info: Job [${this.jobName}] foi executado com sucesso`, OperationStatus.SUCCESS, new Date());
        } catch (error) {
          this.logger.log(`Warning: Job [${this.jobName}] NÃO foi executado com sucesso ${this.jobName}`, OperationStatus.FAILURE, new Date());
        }
      });
    }
  
    protected abstract doJob(): Promise<void>;
}
