import { Body, Controller, Post } from '@nestjs/common';
import { SlackChannelService } from './slack-channel.service';

@Controller('slack-channel')
export class SlackChannelController {
  constructor(private readonly slackChannelService: SlackChannelService) {}

  @Post()
  sendMessage(@Body() body: { channel: string; text: string }) {
    const { text, channel } = body;
    return this.slackChannelService.sendMessage(text, channel);
  }
}
