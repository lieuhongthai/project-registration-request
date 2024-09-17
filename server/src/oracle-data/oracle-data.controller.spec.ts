import { Test, TestingModule } from '@nestjs/testing';
import { OracleDataController } from './oracle-data.controller';
import { OracleDataService } from './oracle-data.service';

describe('OracleDataController', () => {
  let controller: OracleDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OracleDataController],
      providers: [OracleDataService],
    }).compile();

    controller = module.get<OracleDataController>(OracleDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
