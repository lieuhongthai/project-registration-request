import { Module } from '@nestjs/common';
import { SlackChannelService } from './slack-channel.service';
import { SlackChannelController } from './slack-channel.controller';

// ** Slack Import

@Module({
  controllers: [SlackChannelController],
  providers: [SlackChannelService],
})
export class SlackChannelModule {}
