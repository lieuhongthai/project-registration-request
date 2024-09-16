import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Log4jsLogger } from '@nestx-log4js/core';
import { Request, Response } from 'express';
import { TConfigService } from 'src/@core/configs/configuration';
import { HttpExceptionResponseType } from 'src/types/httpExceptionResponseType';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(
    private logger: Log4jsLogger,
    private configService: ConfigService<TConfigService>,
  ) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const ENV_NODE = this.configService.get('nodeEnv');

    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;
    const pipeMessage = exception.getResponse() as HttpExceptionResponseType;

    const messageError = `${status}: path: ${request.url} --- param: ${
      JSON.stringify(request.query) === '{}' ? null : request.query.toString()
    } --- query: ${request.params?.toString()} --- body: ${request.body?.toString()} --- message: ${
      pipeMessage.message || message
    }`;

    this.logger.error(messageError, HttpExceptionFilter.name);
    if (ENV_NODE === 'production' && status === HttpStatus.INTERNAL_SERVER_ERROR) {
      // ** Send log to chanel message
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: pipeMessage.message || message,
    });
  }
}
