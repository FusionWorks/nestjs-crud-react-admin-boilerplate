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

  @Get('/uploads/NestJsAdminBoilerplate/:caseId/:key')
  fileRedirect(@Param('caseId') caseId: string, @Param('key') key: string, @Res() res: Response) {
    return this.s3service.tempRedirect(caseId, key, res);
  }
}
