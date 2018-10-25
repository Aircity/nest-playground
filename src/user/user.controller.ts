import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  UseInterceptors,
} from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiBearerAuth, ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';

@ApiUseTags('user')
@ApiBearerAuth()
@Controller('user')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    title: 'This action adds a new user',
  })
  async create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get()
  @ApiOperation({
    title: 'This action returns  all users',
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    title: 'This action returns a user',
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(+id);
  }
}
