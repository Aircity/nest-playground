import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User) {
    return await this.userRepository.save(user);
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async findOne(id): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async remove(id): Promise<User[]> {
    return await this.userRepository.remove(id);
  }

  async update(id, user: User) {
    user.id = id;
    return await this.userRepository.save(id);
  }

  async pagination(pageHelper): Promise<any> {
    const { current, size } = pageHelper   
    const skip = (current -1) * size
    return await this.userRepository.createQueryBuilder("user").skip(skip).take(size).getMany()
  }
}
