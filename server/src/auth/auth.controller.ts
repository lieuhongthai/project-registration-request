import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async auth(@Body() body: AuthDto) {
    const { username, password } = body;
    return await this.authService.login(`${username}@geonet.co.jp`, password);
  }
}
