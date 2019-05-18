import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestsService } from './guests/guests.service';
import { GuestsController } from './guests/guests.controller';
import { GuestEntity } from './guests/guest.entity';


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
    GuestsService,
  ],
})
export class AppModule { }
