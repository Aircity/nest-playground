import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class PageHelper {
  @ApiModelProperty({
    example: 1,
  })
  @IsInt()
  pageIndex: number;

  @ApiModelProperty({
    example: 20,
  })
  @IsInt()
  pageSize: number;
}
