import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { S3Controller } from './s3.controller';

@Module({
  providers: [S3Service],
  controllers: [S3Controller],
  exports: [S3Service],
})
export class S3Module { }
