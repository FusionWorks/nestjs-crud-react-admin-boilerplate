import { Injectable } from '@nestjs/common';
import { AddressEntity } from './address.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService extends TypeOrmCrudService<AddressEntity> {
  constructor(@InjectRepository(AddressEntity) repository: Repository<AddressEntity>) {
    super(repository);
  }
}
