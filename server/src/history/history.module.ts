import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RequestHistory } from './entities/request-history.entity';
import { Status } from './entities/status.entity';

@Module({
  imports: [SequelizeModule.forFeature([RequestHistory, Status])],
  controllers: [HistoryController],
  providers: [HistoryService],
  exports: [HistoryService, SequelizeModule],
})
export class HistoryModule {}
