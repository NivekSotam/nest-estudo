import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { User } from 'src/users/schemas/user.shema';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';


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

    const verifyUserPassword = await bcrypt.compare(password, user.password);

    if (!verifyUserPassword) {
      throw new BadRequestException();
    }

    const payload = {
      email: user.email,
      password: user.password
    };

    return this.jwtService.sign(payload);

  }
}