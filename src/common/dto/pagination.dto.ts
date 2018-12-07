import { ApiModelProperty } from '@nestjs/swagger';

export class Pagination<T> {
  @ApiModelProperty({ default: false })
  HasError: boolean;

  @ApiModelProperty({ default: '' })
  ErrorMessage: string;

  @ApiModelProperty({ example: { totolSize: 200 } })
  Pagenation: object;

  @ApiModelProperty()
  Hero: T;
}
