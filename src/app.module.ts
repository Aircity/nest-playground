import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReconciliationModule } from './reconciliation/reconciliation.module';
@Module({
  imports: [TypeOrmModule.forRoot(), ReconciliationModule],
})
export class AppModule {}
