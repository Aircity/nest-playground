import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';

import { ReconciliationService } from './reconciliation.service';
import { Reconciliation } from './reconciliation.entity';
import { PageHelper } from '../common/dto/page.helper.dto';
import { Pagination } from '../common/dto/pagination.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import {
  ApiBearerAuth,
  ApiUseTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
class ReconciliationPagination extends Pagination<number> {
  @ApiModelProperty()
  QueryResult: Reconciliation;
}

// const Test = new Pagination<Reconciliation>();
// console.log(Test)
@ApiUseTags('reconciliation')
@Controller('reconciliation')
@ApiBearerAuth()
@UseInterceptors(LoggingInterceptor)
export class ReconciliationController {

  constructor(private readonly recService: ReconciliationService) { }
  @UseInterceptors(TransformInterceptor)
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ReconciliationPagination,
  })
  @Post('QueryList')
  @ApiOperation({
    title: 'This action returns list with pagination',
  })
  pagination(@Body() pageHelper: PageHelper): Promise<any> {
    return this.recService.pagination(pageHelper);
  }
}
