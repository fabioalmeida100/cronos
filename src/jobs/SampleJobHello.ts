import { Logger } from '../utils/LoggerConsole';
import AbstractCronJob from '../basetype/AbstractCronJob'
import axios from 'axios';

export default class SampleJobHello extends AbstractCronJob {
  constructor(schedulePattern: string) {
    super(schedulePattern, "Sample Job Hello", new Logger());
  }

  public async doJob(): Promise<void> {
    // TODO: implement your job here
    /* 
      Example of use axios to get data from a rest api: 
      
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      console.log(response.data); 
    */
    console.log("I'm say hello, because I'm a sample job");
  }
}
