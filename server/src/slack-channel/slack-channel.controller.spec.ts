import { Test, TestingModule } from '@nestjs/testing';
import { SlackChannelController } from './slack-channel.controller';
import { SlackChannelService } from './slack-channel.service';

describe('SlackChannelController', () => {
  let controller: SlackChannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlackChannelController],
      providers: [SlackChannelService],
    }).compile();

    controller = module.get<SlackChannelController>(SlackChannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
