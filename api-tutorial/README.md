## Installation

```bash
$ npm install
$ yarn install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database

Database is installed with docker, so to install and start the database

```
   cd api-tutorial
   docker compose up dev-db -d
```

Then it will install and start the database