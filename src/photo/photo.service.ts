import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async create(photo: Photo) {
    return await this.photoRepository.save(photo);
  }
  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
  async findOne(id): Promise<Photo> {
    return await this.photoRepository.findOne(id);
  }
}
