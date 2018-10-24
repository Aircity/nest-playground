import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';

@ApiBearerAuth()
@Controller('photo')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post()
  async create(@Body() photo: Photo) {
    return this.photoService.create(photo);
  }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Photo> {
    return this.photoService.findOne(+id);
  }
}
