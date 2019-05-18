import { GuestsService } from './guests.service';
import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { GuestEntity } from './guest.entity';

@Crud(GuestEntity)
@Controller('guests')
export class GuestsController {
  constructor(public service: GuestsService) { }
}
