import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { User } from 'src/users/schemas/user.shema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) { }

  async loginUser(email: string, password: string): Promise<string> {
    const user = await this.userModel.findOne({ email });

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) return 'Credentials are correct!';

      return 'Invalid Credentials!';
    }

    return 'Invalid Invalid!';
  }
}