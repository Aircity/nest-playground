import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reconciliation } from './reconciliation.entity';

@Injectable()
export class ReconciliationService {
  constructor(
    @InjectRepository(Reconciliation)
    private readonly userRepository: Repository<Reconciliation>,
  ) {}

  async create(rec: Reconciliation) {
    return await this.userRepository.save(rec);
  }
  async findAll(): Promise<Reconciliation[]> {
    return await this.userRepository.find();
  }
  async findOne(id): Promise<Reconciliation> {
    return await this.userRepository.findOne(id);
  }

  async remove(id): Promise<Reconciliation[]> {
    return await this.userRepository.remove(id);
  }

  async update(id, rec: Reconciliation) {
    rec.id = id;
    return await this.userRepository.save(id);
  }

  async pagination(pageHelper): Promise<any> {
    const { pageIndex, pageSize } = pageHelper;
    const skip = (pageIndex - 1) * pageSize;
    return await this.userRepository
      .createQueryBuilder('user')
      .skip(skip)
      .take(pageSize)
      .getManyAndCount();
  }
}
