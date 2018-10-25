import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(photo: User) {
    return await this.userRepository.save(photo);
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async findOne(id): Promise<User> {
    return await this.userRepository.findOne(id);
  }
}
