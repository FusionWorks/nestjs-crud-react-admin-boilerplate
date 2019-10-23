import { Injectable } from '@nestjs/common';
import { CompanyEntity } from './company.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService extends TypeOrmCrudService<CompanyEntity> {
  constructor(@InjectRepository(CompanyEntity) repository: Repository<CompanyEntity>) {
    super(repository);
  }
}
