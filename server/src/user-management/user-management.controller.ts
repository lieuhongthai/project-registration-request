import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { CreateUserManagementDto } from './dto/create-user-management.dto';
import { UpdateUserManagementDto } from './dto/update-user-management.dto';
import { DeleteUserManagementDto } from './dto/delete-user-managemtent.dto';
import { GetUserManagementDto } from './dto/get-user-management.dto';

@Controller('v1/user-management')
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) {}

  @Post()
  create(@Body() createUserManagementDto: CreateUserManagementDto) {
    return this.userManagementService.create();
  }

  @Get()
  async findAll(@Query() query: GetUserManagementDto) {
    const { fullName } = query;
    const users = await this.userManagementService.getUserAndRolesByName(fullName);

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
  remove(@Param() param: DeleteUserManagementDto) {
    const { id } = param;
    return this.userManagementService.remove(+id);
  }
}
