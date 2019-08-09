import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AddressService } from './address.service';
import { AddressEntity } from './address.entity';

@Crud({
  model: {
    type: AddressEntity,
  },
})
@Controller('address')
export class AddressController {
  constructor(public service: AddressService) {
  }
}
