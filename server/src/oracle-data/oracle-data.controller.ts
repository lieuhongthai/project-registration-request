import { Controller, Get } from '@nestjs/common';
import { OracleDepartment } from 'src/types/oracle-data.type';
import { OracleDataService } from './oracle-data.service';

@Controller('v1/oracle-data')
export class OracleDataController {
  constructor(private readonly oracleDataService: OracleDataService) {}

  @Get('departments')
  async findAll(): Promise<OracleDepartment[]> {
    return await this.oracleDataService.getDepartments();
  }
}
