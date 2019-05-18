import { Injectable } from '@nestjs/common';
import { GuestEntity } from './guest.entity';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GuestsService extends RepositoryService<GuestEntity> {
  constructor(@InjectRepository(GuestEntity) repository) {
    super(repository);
  }
}
