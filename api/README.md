
# React Admin + NestJS CRUD Quick Start

<p align="center">
  <a href="README.md">Overview</a>
  &nbsp;&nbsp;&nbsp;
	<a href="admin-ui/README.md">Frontend</a>
  &nbsp;&nbsp;&nbsp;
	<i><a href="api/README.md">Backend</a></i>
  &nbsp;&nbsp;&nbsp;
</p>

Backend portion of this boilerplate is an opinionated TypeScript boilerplate for Nest, including nodemon, TSLint, Jest. At this point API allows to perform CRUD operations about guests list.

## Prerequisites
NodeJs 10+, Npm ( or Yarn ) installed, also if you dont have NestCLI run `npm install -g @nestjs/cli`.

## Installation

```bash
$ cp .env.example .env
# update .env file to match your MySQL settings.
$ mkdir config 
```

Create file inside `src/config` named `database.ts` with context:
```Typescript
export default {
  host: process.env.DB_HOST,
  type: 'mysql',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: process.env.DB_SYNCRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true',
};
```

#### Yarn
```bash
yarn install
```

#### NPM
```bash
npm install
```

## Running the app

#### NPM
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

#### Yarn
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

#### NPM
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

#### Yarn
```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
## Creating from scratch

#### Initializing API application

Run `nest new api` inside main project folder ( it will create folder named `api`).  
Move to `api` folder `cd api`.  

#### Prepare required dependencies

##### Typeorm
`npm install @nestjs/typeorm typeorm mysql class-validator class-transformer`

##### NestJSX
`npm i @nestjsx/crud nestjs-config`

### Create all required files.
##### App Module
Go to `app.module.ts`
At the very top add: 
```Typescript
import { ConfigModule, ConfigService } from 'nestjs-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
```
Inside `imports: []` add:
```Typescript
    ConfigModule.load(path.resolve(__dirname, 'config', '*.{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
```

##### Guests Module
Run `nest generate module guests` **or** `nest g mo guests`.  
At the very top add:
```Typescript
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestEntity } from './guest.entity';
```  

Make sure `@Module({})` has`imports: []`, `controllers: []` and `providers: []`, like: ` 
```Typescript
@Module({
  imports: [],
  providers: [],
  controllers: [],
})
```

Into `imports: []` add value `TypeOrmModule.forFeature([GuestEntity])`.  
Into `providers: []` add value `GuestsService`.  
Into `controllers: []` add value `GuestsController`.  

##### Guests Controller
Run `nest generate controller guests` **or** `nest g co guests`.  
Open `src/guests/guests.controller.ts`.  
At the very top add: 
```Typescript
import { Crud } from '@nestjsx/crud';
import { GuestsService } from './guests.service';
import { GuestEntity } from './guest.entity';
```

Add `@Crud(GuestEntity)` before `@Controller('guests')`.

Add constructor: 
```Typescript
constructor(public service: GuestsService) { }
```

##### Guests Service
Run `nest generate service guests` **or** `nest g s guests`. 
Open `src/guests/guests.service.ts`.  
At the very top add: 
```Typescript
import { GuestEntity } from './guest.entity';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
```
Extend class `GuestsService` with `extends RepositoryService<GuestEntity>`.  

Add constructor: 
```Typescript
constructor(@InjectRepository(GuestEntity) repository) {
   super(repository);
 }
```

##### Guests Entity
Go to `src/guests` folder and create file named `guest.entity.ts` with context:

```Typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity({ name: 'guests' })
export class GuestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column({ default: false })
  isPresent: boolean;
}
```

##### Environment
Create file `.env.example` with content: 
```ENV
DB_HOST = localhost
DB_PORT = 3306
DB_USER = USER
DB_PASSWORD = PASS
DB_DATABASE = DB
DB_SYNCRONIZE = true
DB_LOGGING = true
```

Go to `main.ts` and inside `NestFactory.create` add second argument `, { cors: true }` then change port from `3000` to `3001`.

Now, follow installation.

### We are done!

Read NestJs's [documentation](https://docs.nestjs.com/) if you need to implement more complex scenarious and behaviours.
  
## Readme Navigation

Further details on each of the systems contained in this project can be found via the following links:  
-  [Overview](README.md)
-  [Frontend](admin-ui/README.md)
-  _[Backend](api/README.md)_

## Follow us
[Website](https://fusion.works) - [Facebook](https://www.facebook.com/FusionWorksMD/) - [LinkedIn](https://www.linkedin.com/company/fusionworks-moldova/)

<p align="center">
  <a href="https://fusion.works">Website</a>
  &nbsp;&nbsp;&nbsp;
	<a href="https://www.facebook.com/FusionWorksMD/">Facebook</a>
  &nbsp;&nbsp;&nbsp;
	<a href="https://www.linkedin.com/company/fusionworks-moldova/">LinkedIn</a>
  &nbsp;&nbsp;&nbsp;
</p>
