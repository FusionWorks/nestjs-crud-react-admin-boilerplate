import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GuestEntity } from './guest/guest.entity';
import { GuestsController } from './guest/guest.controller';
import { GuestService } from './guest/guest.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nodeuser',
      password: '1234',
      database: 'guests',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([GuestEntity]),
  ],
  controllers: [
    AppController,
    GuestsController,
  ],
  providers: [
    AppService,
    GuestService,
  ],
})
export class AppModule { }
