import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Reconciliation {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({
    description: '对账单编号',
  })
  reconciliationCode: string;

  @ApiModelProperty({
    description: '对账单状态',
  })
  @Column('text')
  reconciliationStatus: string;

  @ApiModelProperty({
    description: '对账总金额',
  })
  @Column()
  reconciliationTotalPrice: number;

  @ApiModelProperty({
    description: '公司主体',
  })
  @IsNotEmpty()
  companyName: string;

  @ApiModelProperty({
    description: '对账周期',
  })
  @Column()
  reconciliationCycle: string;

  @ApiModelProperty({
    description: '成本中心',
  })
  @Column()
  costCenterName: string;

  @ApiModelProperty({
    description: '对账人',
  })
  @Column()
  reconciliationBy: string;

  @ApiModelProperty({
    description: '创建时间',
  })
  @Column()
  createTime: string;
}
