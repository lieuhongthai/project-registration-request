import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { FilterRequestDto } from './dto/filter-request.dto';

@Controller('/v1/attachment')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Post()
  create(@Body() createAttachmentDto: CreateAttachmentDto) {
    return this.attachmentService.create(createAttachmentDto);
  }

  @Get()
  findAll(@Query() filterDto: FilterRequestDto) {
    return this.attachmentService.findAll(filterDto.requestId);
  }
}
