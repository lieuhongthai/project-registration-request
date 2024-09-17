import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/roles')
  getAllRoles() {
    return this.usersService.getAllRoles();
  }
}
