import { Module } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { UserManagementController } from './user-management.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from 'src/@core/model/users/user.model';
import { UsersModule } from 'src/@core/model/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Users]), UsersModule],
  controllers: [UserManagementController],
  providers: [UserManagementService],
})
export class UserManagementModule {}
