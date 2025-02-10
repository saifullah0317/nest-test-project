import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/db/entities/user.entity';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
}
