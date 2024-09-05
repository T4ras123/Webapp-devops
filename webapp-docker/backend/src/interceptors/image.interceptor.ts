import { BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export const ImageInterceptor = FileInterceptor('file', {
  fileFilter(_req, file, callback) {
    if (!file.mimetype.includes('image')) {
      return callback(new BadRequestException('Invalid file type'), false);
    }

    callback(null, true);
  },
  storage: diskStorage({
    destination: './static/',
    filename(_req, file, callback) {
      callback(null, `${Date.now()}.${file.originalname.split('.').slice(-1)}`);
    },
  }),
});
