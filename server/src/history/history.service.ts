import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { InjectModel } from '@nestjs/sequelize';
import { RequestHistory } from './entities/request-history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel(RequestHistory)
    private requestHistoryModel: typeof RequestHistory,
  ) {}

  async create(createHistoryDto: CreateHistoryDto): Promise<RequestHistory> {
    return this.requestHistoryModel.create({ ...createHistoryDto });
  }

  async findAll(requestId: number): Promise<RequestHistory[]> {
    return await this.requestHistoryModel.findAll({
      where: {
        project_registration_id: requestId,
      },
    });
  }
}
