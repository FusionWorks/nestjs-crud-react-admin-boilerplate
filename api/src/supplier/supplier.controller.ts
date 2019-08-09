import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { SupplierService } from './supplier.service';
import { SupplierEntity } from './supplier.entity';

@Crud({
  model: {
    type: SupplierEntity,
  },
})
@Controller('supplier')
export class SupplierController {
  constructor(public service: SupplierService) { }
}
