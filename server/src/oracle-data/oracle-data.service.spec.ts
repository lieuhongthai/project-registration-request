import { Test, TestingModule } from '@nestjs/testing';
import { OracleDataService } from './oracle-data.service';

describe('OracleDataService', () => {
  let service: OracleDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OracleDataService],
    }).compile();

    service = module.get<OracleDataService>(OracleDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
