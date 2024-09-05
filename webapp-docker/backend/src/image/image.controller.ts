import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { ImageInterceptor } from 'src/interceptors/image.interceptor';
import { GetByIdDto } from './dto/get-by-id.dto';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @UseInterceptors(ImageInterceptor)
  @Post()
  create(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.imageService.create(createImageDto, file);
  }

  @Get()
  findAll(@Query() { id }: GetByIdDto) {
    if (id) {
      return this.imageService.findOne(Number(id));
    }

    return this.imageService.findAll();
  }
}
