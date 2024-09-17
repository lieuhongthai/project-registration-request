import { Module } from '@nestjs/common';
import { OracleDataController } from './oracle-data.controller';
import { OracleDataService } from './oracle-data.service';

@Module({
  controllers: [OracleDataController],
  providers: [OracleDataService],
  exports: [OracleDataService],
})
export class OracleDataModule {}
