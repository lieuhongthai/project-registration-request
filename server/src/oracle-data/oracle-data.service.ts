import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as oracleDb from 'oracledb';
import { OracleDepartment } from 'src/types/oracle-data.type';
import { getDepartmentsSql } from './oracledb-sql';
import { Cache } from 'cache-manager';
import { TConfigService } from 'src/@core/configs/configuration';

@Injectable()
export class OracleDataService {
  public readonly CACHE_ORACLE_DEPARTMENTS_KEY = '/api/oracle-data/departments';

  constructor(
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getDepartments(): Promise<OracleDepartment[]> {
    const cachedDepartments = await this.cacheManager.get<OracleDepartment[]>(this.CACHE_ORACLE_DEPARTMENTS_KEY);

    if (cachedDepartments) return cachedDepartments;

    oracleDb.initOracleClient();

    const oracledbConfig = this.configService.getOrThrow<TConfigService['oracledb']>('oracledb');

    const connection = await oracleDb.getConnection({
      user: oracledbConfig.user,
      password: oracledbConfig.password,
      connectString: oracledbConfig.connectionString,
      externalAuth: false,
    });

    try {
      const results = await connection.execute<[string, string]>(getDepartmentsSql);
      let departments: OracleDepartment[] = [];

      if (results && results.rows) {
        departments = results.rows.map<OracleDepartment>((row) => ({ id: row[0].trim(), name: row[1].trim() }));
      }

      await this.cacheManager.set(
        this.CACHE_ORACLE_DEPARTMENTS_KEY,
        departments,
        this.configService.get<TConfigService['cache']>('cache').oracleDepartmentsLifetime,
      );

      return departments;
    } catch {
      throw new InternalServerErrorException('Something went wrong in oracledb connection');
    } finally {
      connection.close();
    }
  }
}
