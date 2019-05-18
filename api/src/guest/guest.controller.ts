
import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { GuestEntity } from './guest.entity';
import { GuestService } from './guest.service';

@Crud(GuestEntity)
@Controller('guests')
export class GuestsController {
  // Should be named service.
  constructor(public service: GuestService) { }
}
