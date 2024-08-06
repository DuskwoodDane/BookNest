import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { ResponseData } from 'src/types/public';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signup(@Body() body: User): Promise<ResponseData> {
    return this.authService.signup(body);
  }
}
