import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseData } from 'src/types/public';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signup(body: User): Promise<ResponseData> {
    const { username, password } = body;
    const res = await this.userRepository.findOne({ where: { username } });
    console.log('data==', body, res);
    if (!res) {
      throw new UnauthorizedException();
    }

    if (res.password !== password) {
      throw new UnauthorizedException();
    }
    return {
      code: 200,
      data: {},
      message: '登录成功',
    };
  }
}
