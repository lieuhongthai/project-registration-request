import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesDecorator } from 'src/@core/decorators/roles.decorator';
import { AuthService } from 'src/auth/auth.service';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(RolesDecorator, context.getHandler());

    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest() as Request;
    const token = request.cookies[this.authService.getCookieName()];
    if (token) request['user'] = this.authService.verifyToken(token);

    return true;
  }
}
