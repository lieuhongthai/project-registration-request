import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from 'src/@core/model/users/user.model';
import { Roles } from 'src/@core/model/roles/roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Users, Roles])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
