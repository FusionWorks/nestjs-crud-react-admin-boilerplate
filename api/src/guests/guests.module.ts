import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestsController } from './guests.controller';
import { GuestEntity } from './guest.entity';
import { GuestsService } from './guests.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuestEntity]),
  ],
  controllers: [
    GuestsController,
  ],
  providers: [
    GuestsService,
  ],
})
export class GuestsModule { }
