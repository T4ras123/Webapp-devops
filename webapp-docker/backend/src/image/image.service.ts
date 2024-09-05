import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {}

  async create(createImageDto: CreateImageDto, file: Express.Multer.File) {
    const image = await this.imageRepository.create({
      ...createImageDto,
      src: `${file.destination.slice(1)}${file.filename}`,
    });

    return this.imageRepository.save(image);
  }

  findAll() {
    return this.imageRepository.find();
  }

  findOne(id: number) {
    return this.imageRepository.findOneBy({ id });
  }
}
