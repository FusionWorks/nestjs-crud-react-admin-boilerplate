import { Controller, Get, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { S3Service } from './s3.service';

@Controller('s3')
export class S3Controller {
  constructor(private s3service: S3Service) { }

  @Get('/sign')
  sign(@Req() req: Request, @Res() res: Response) {
    return this.s3service.signIn(req, res);
  }

  @Get('/uploads/NestJsAdminBoilerplate/:id/:key')
  fileRedirect(@Param('id') id: string, @Param('key') key: string, @Res() res: Response) {
    return this.s3service.tempRedirect(id, key, res);
  }
}
