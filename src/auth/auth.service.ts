import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { User } from 'src/users/schemas/user.shema';
import { InjectModel } from '@nestjs/mongoose';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private jwtService: JwtService
  ) { }

  async loginUser(email: string, password: string): Promise<string> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new BadRequestException();
    }

    const verificaSenha = await bcrypt.compare(password, user.password);

    if (!verificaSenha) {
      throw new BadRequestException();
    }

    const payload = {
      email: user.email,
      password: user.password
    };

    return this.jwtService.sign(payload);

  }
}