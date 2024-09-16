import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permissions } from './permissions.model';

@Module({
  imports: [SequelizeModule.forFeature([Permissions])],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
