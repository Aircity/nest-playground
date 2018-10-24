import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column({ length: 500 })
  name: string;

  @ApiModelProperty()
  @Column('text')
  description: string;

  @ApiModelProperty()
  @Column()
  filename: string;

  @ApiModelProperty()
  @Column('int')
  views: number;

  @ApiModelProperty()
  @Column()
  isPublished: boolean;
}
