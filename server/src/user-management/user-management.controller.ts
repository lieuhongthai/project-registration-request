import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { CreateUserManagementDto } from './dto/create-user-management.dto';
import { UpdateUserManagementDto } from './dto/update-user-management.dto';
import { UsersService } from 'src/@core/model/users/users.service';
import { Users } from 'src/@core/model/users/user.model';

@Controller('v1/user-management')
export class UserManagementController {
  constructor(
    private readonly userManagementService: UserManagementService,

    private readonly userService: UsersService,
  ) {}

  @Post()
  create(@Body() createUserManagementDto: CreateUserManagementDto) {
    return this.userManagementService.create(createUserManagementDto);
  }

  @Get()
  async findAll() {
    const users = await this.userService.getUserAndRoles();

    return users.map((user) => ({
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      roles: user.roles.map((role) => role.name),
    }));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserManagementDto: UpdateUserManagementDto) {
    return this.userManagementService.update(+id, updateUserManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userManagementService.remove(+id);
  }
}
