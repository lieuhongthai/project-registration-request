// ** NestJs Common Import
import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';

// ** NestJs Config Import
import { ConfigModule, ConfigService } from '@nestjs/config';

// ** Controller
import { AppController } from './app.controller';

// ** Service
import { AppService } from './app.service';

// ** Log4js Import
import { Log4jsModule } from '@nestx-log4js/core';
import { LOG4JS_DEFAULT_CONFIG } from 'src/@core/loggers/layout.logger';

// ** Config custom
import configuration from 'src/@core/configs/configuration';

// ** Joi Import
import * as Joi from 'joi';

// ** Logger Middleware Import
import { LoggerMiddleware } from 'src/@core/middlewares/logger.middleware';

// ** Exception Import
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/@core/filters/httpException.filter';

import { APP_GUARD } from '@nestjs/core';

// ** Database
import { SequelizeModule } from '@nestjs/sequelize';
import { PermissionsModule } from 'src/@core/model/permissions/permissions.module';
import { RolesModule } from 'src/@core/model/roles/roles.module';
import { UsersModule } from 'src/@core/model/users/users.module';

// ** Modules
import { RolesGuard } from 'src/@core/guard/role.guard';
import { ApproveProjectsModule } from './approve-projects/approve-projects.module';
import { OracleDataModule } from './oracle-data/oracle-data.module';
import { ProjectRegistrationModule } from './project-registration/project-registration.module';
import { SlackChannelModule } from './slack-channel/slack-channel.module';
import { StartUpService } from './startUp.service';
import { CacheModule } from '@nestjs/cache-manager';

import { AuthModule } from './auth/auth.module';
import { UserManagementModule } from './user-management/user-management.module';

import { FileUploadModule } from './file-upload/file-upload.module';
import { AttachmentModule } from './attachment/attachment.module';
import { HistoryModule } from './history/history.module';
@Module({
  imports: [
    // ** NestJs Config
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision', 'staging')
          .default('development'),
        PORT: Joi.number().default(8080),
      }),
    }),

    // ** Database
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { uri, dialect, logging } = configService.get('database');

        return { uri, dialect, logging, autoLoadModels: true, sync: { force: false, alter: true } };
      },
    }),

    // ** Caching
    CacheModule.register({ isGlobal: true }),

    // ** Log4js
    Log4jsModule.forRoot({ config: LOG4JS_DEFAULT_CONFIG }),

    // ** Models
    UsersModule,

    RolesModule,

    PermissionsModule,

    // ** Modules
    SlackChannelModule,

    ProjectRegistrationModule,

    ApproveProjectsModule,

    OracleDataModule,

    AuthModule,

    FileUploadModule,

    UserManagementModule,

    AttachmentModule,

    HistoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    StartUpService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
