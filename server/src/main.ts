import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// ** Config
import { ConfigService } from '@nestjs/config';

// ** Pipe
import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { HttpExceptionFilter } from 'src/@core/filters/httpException.filter';
import { Log4jsLogger } from '@nestx-log4js/core';
import * as compression from 'compression';
import helmet from 'helmet';
import { TConfigService } from 'src/@core/configs/configuration';
import { RolesGuard } from './@core/guard/role.guard';
import { Reflector } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose'],
  });

  const configuration: ConfigService<TConfigService> = app.get(ConfigService);

  const port = configuration.get('port');
  const projectTitle = configuration.get('projectTitle');

  const config = new DocumentBuilder()
    .setTitle(projectTitle)
    .setDescription('')
    .setVersion('1.00')
    .addServer(`http://localhost:${port}/api`)
    .build();

  SwaggerModule.setup('swagger', app, SwaggerModule.createDocument(app, config));
  app.setGlobalPrefix('api');

  app.use(compression());

  // ** Security Middleware
  app.use(cookieParser());

  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      },
    }),
  );

  app.enableCors();

  // app.use(csurf());

  app.useLogger(app.get(Log4jsLogger));

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new HttpExceptionFilter(app.get(Log4jsLogger), app.get(ConfigService)));

  app.useGlobalGuards(new RolesGuard(app.get(Reflector)));

  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
