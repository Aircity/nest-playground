import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  UseInterceptors,
} from '@nestjs/common';

import { ReconciliationService } from './reconciliation.service';
import { Reconciliation } from './reconciliation.entity';
import { PageHelper } from '../common/dto/page.helper.dto';
import {
  ApiBearerAuth,
  ApiUseTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';

@ApiUseTags('reconciliation')
@ApiBearerAuth()
@Controller('reconciliation')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class ReconciliationController {
  constructor(private readonly recService: ReconciliationService) {}

  @Post('QueryList')
  @ApiOperation({
    title: 'This action returns list with pagination',
  })
  pagination(@Body() pageHelper: PageHelper): Promise<any> {
    return this.recService.pagination(pageHelper);
  }
}
