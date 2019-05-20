import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestsService } from './guests/guests.service';
import { GuestsController } from './guests/guests.controller';
import { GuestEntity } from './guests/guest.entity';
import * as path from 'path';


@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '*.{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([GuestEntity]),
  ],
  controllers: [
    AppController,
    GuestsController,
  ],
  providers: [
    AppService,
    GuestsService,
  ],
})
export class AppModule { }
