import { Test, TestingModule } from '@nestjs/testing';
import { ApproveProjectsService } from './approve-projects.service';

describe('ApproveProjectsService', () => {
  let service: ApproveProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApproveProjectsService],
    }).compile();

    service = module.get<ApproveProjectsService>(ApproveProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
