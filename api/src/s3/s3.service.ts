import { Injectable } from '@nestjs/common';
import { InjectConfig, ConfigService } from 'nestjs-config';
import { S3 } from 'aws-sdk';
import { Request, Response } from 'express';

@Injectable()
export class S3Service {
  private readonly s3Bucket: string;
  private readonly s3Region: string;
  private s3: S3;

  constructor(
    @InjectConfig() private config: ConfigService,
  ) {
    this.s3Bucket = config.get('s3.bucket');
    this.s3Region = config.get('s3.region');
    this.s3 = new S3({ region: this.s3Region, signatureVersion: 'v4' });
  }

  async signIn(req: Request, res: Response): Promise<any> {
    const { objectName, contentType, path = '' } = req.query;
    const objectNameChunks = objectName.split('/');
    const filename = objectNameChunks[objectNameChunks.length - 1];
    const mimeType = contentType;
    const fileKey = `${path}/${objectName}`;
    const params = {
      Bucket: this.s3Bucket,
      Key: fileKey,
      Expires: 60,
      ContentType: mimeType,
      ACL: 'private',
    };

    res.set({ 'Access-Control-Allow-Origin': '*' });

    this.s3.getSignedUrl('putObject', params, (err, data) => {
      if (err) {
        res.statusMessage = 'Cannot create S3 signed URL';

        return res.status(500);
      }

      res.json({
        signedUrl: data,
        publicUrl: '/s3/uploads/' + fileKey,
        filename,
        fileKey,
      });
    });
  }

  tempRedirect(caseId: string, key: string, res: Response) {
    const params = {
      Bucket: this.s3Bucket,
      Key: `NestJsAdminBoilerplate/${caseId}/${key}`,
    };

    this.s3.getSignedUrl('getObject', params, (err, url) => {
      res.redirect(url);
    });
  }

}
