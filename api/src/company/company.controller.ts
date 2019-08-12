import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CompanyService } from './company.service';
import { CompanyEntity } from './company.entity';

@Crud({
  model: {
    type: CompanyEntity,
  },
})
@Controller('company')
export class CompanyController {
  constructor(public service: CompanyService) { }
}
