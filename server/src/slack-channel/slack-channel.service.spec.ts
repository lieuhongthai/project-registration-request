import { Test, TestingModule } from '@nestjs/testing';
import { SlackChannelService } from './slack-channel.service';

describe('SlackChannelService', () => {
  let service: SlackChannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlackChannelService],
    }).compile();

    service = module.get<SlackChannelService>(SlackChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
