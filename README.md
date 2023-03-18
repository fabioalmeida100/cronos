# Cronos: a cron-like job scheduler for the web

Cronos is a job scheduler for the web. It is a simple, lightweight, and easy to use job scheduler that can be used to schedule jobs to run at a specific time or interval. 

## Implementation

Cronos is implemented in Node.js and uses the following technologies:

- Node.js for the server
- Lib *axios* for the http requests
- Lib *cron* for the cron jobs

The implementation is based on the following design:

- Implement the abstract class *AbstractCronJob* for create a new cron job
- In the method *doJob* implement the logic for the cron job
- Implement the interface ILog with the method *log* for log the cron job (optional, because the default implementation is a console log)

## Development and production

For develop:

- run `npm run build` for create the build
- after run `npm run start`

For run with docker:

- run `docker-compose up`
