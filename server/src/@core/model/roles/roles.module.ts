import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Roles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [SequelizeModule],
})
export class RolesModule {}
