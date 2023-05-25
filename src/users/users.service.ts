import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.shema';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
 
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
    ) { }

    async getAllUsers(): Promise<User[]>{
      const users = await this.userModel.find();
      return users;
    }

    async create(user: User): Promise<User>{
      const createUser = await this.userModel.create(user);
      return createUser;
    }
}