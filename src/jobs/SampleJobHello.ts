import { Logger } from '../utils/LoggerConsole';
import AbstractCronJob from '../basetype/AbstractCronJob'

export default class SampleJobHello extends AbstractCronJob {
  constructor(schedulePattern: string) {
    super(schedulePattern, new Logger());
  }

  public async doJob(): Promise<void> {
    console.log('POST /hello');
  }
}
