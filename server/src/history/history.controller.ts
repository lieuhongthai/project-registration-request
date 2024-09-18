import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { FilterRequestDto } from './dto/filter-request.dto';

@Controller('/v1/history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }

  @Get()
  findAll(@Query() filter: FilterRequestDto) {
    return this.historyService.findAll(filter.requestId);
  }
}
