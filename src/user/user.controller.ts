import {
  Controller,
  Body,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  UseInterceptors
} from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './user.entity';
import { PageHelper } from '../common/dto/page.helper.dto'
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
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

  // @Get()
  // @ApiOperation({
  //   title: 'This action returns  all users',
  // })
  // @ApiResponse({ status: 200, description: 'User', type: User , isArray: true})   
  // findAll(): Promise<User[]> {
  //   console.log('eeeee')    
  //   return this.userService.findAll();
  // }

  @Get(':id') 
  @ApiOperation({
    title: 'This action returns a user based on the ID supplied',
  })
  @ApiResponse({ status: 200, description: 'User', type: User })    
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({
    title: 'Deletes a  user based on the ID supplied',
  })
  remove(@Param('id') id: string): Promise<User[]> {
    return this.userService.remove(+id);
  }

  @Patch(':id')
  @ApiOperation({
    title: 'Updates a  user based on the ID supplied',
  })
  update(@Param('id') id: string, @Body() user: User) {
    return this.userService.update(+id, user);
  }

  @Post('pagination')
  @ApiOperation({
    title: 'This action returns users with pagination',
  })
  pagination(@Body() pageHelper: PageHelper) : Promise<User[]> {
    return this.userService.pagination(pageHelper)
  }
}
