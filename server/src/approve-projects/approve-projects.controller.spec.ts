import { Test, TestingModule } from '@nestjs/testing';
import { ApproveProjectsController } from './approve-projects.controller';
import { ApproveProjectsService } from './approve-projects.service';

describe('ApproveProjectsController', () => {
  let controller: ApproveProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApproveProjectsController],
      providers: [ApproveProjectsService],
    }).compile();

    controller = module.get<ApproveProjectsController>(ApproveProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
