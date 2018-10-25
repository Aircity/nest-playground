import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column({ length: 100 })
  name: string;

  @ApiModelProperty()
  @Column('text')
  description: string;

  @ApiModelProperty()
  @IsEmail()
  @Column()
  email: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Column('int')
  password: string;

  @ApiModelProperty()
  @Column()
  isVIP: boolean;
}
