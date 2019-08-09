import { Injectable } from '@nestjs/common';
import { SupplierEntity } from './supplier.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService extends TypeOrmCrudService<SupplierEntity> {
  constructor(@InjectRepository(SupplierEntity) repository: Repository<SupplierEntity>) {
    super(repository);
  }
}
