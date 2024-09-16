import { Body, Controller, HttpCode, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

import { Request, Response } from 'express';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  async auth(@Body() body: AuthDto, @Res({ passthrough: true }) res: Response) {
    const { username, password } = body;
    const user = await this.authService.login(`${username}@geonet.co.jp`, password, username);

    const token = this.authService.generateToken(user);

    res.cookie('__auth_', token.access_token, { httpOnly: true, secure: true, maxAge: 28800000 });

    return user;
  }

  @Post('verify')
  @HttpCode(200)
  async verify(@Req() req: Request) {
    const token = req.cookies.__auth_ || '';

    return this.authService.verifyToken(token);
  }
}
