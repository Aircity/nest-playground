import { Module } from '@nestjs/common';
import { ReconciliationService } from './reconciliation.service';
import { ReconciliationController } from './reconciliation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reconciliation } from './reconciliation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reconciliation])],
  providers: [ReconciliationService],
  controllers: [ReconciliationController],
})
export class ReconciliationModule {}
