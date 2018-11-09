import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class PageHelper {
  @ApiModelProperty()
  @IsInt()
  current: number;

  @ApiModelProperty()
  @IsInt()
  size: number;  
}