import SampleJobHello from './jobs/SampleJobHello';

// Create a new cron job
const cronJob = new SampleJobHello("* * * * *");
cronJob.start();
