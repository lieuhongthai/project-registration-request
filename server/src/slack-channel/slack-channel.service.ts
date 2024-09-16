import { Injectable } from '@nestjs/common';

import { WebClient } from '@slack/web-api';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SlackChannelService {
  private readonly slackClient: WebClient;

  constructor(private configService: ConfigService) {
    const { token } = this.configService.get('slackApi');
    this.slackClient = new WebClient(token);
  }

  sendMessage(text: string, channel = 'C06RFSYKWHK') {
    this.slackClient.chat.postMessage({
      channel,
      text,
    });
  }

  notification() {
    //
  }
}
