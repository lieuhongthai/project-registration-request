import { PartialType } from '@nestjs/swagger';
import { CreateSlackChannelDto } from './create-slack-channel.dto';

export class UpdateSlackChannelDto extends PartialType(CreateSlackChannelDto) {}
