import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.shema';
import * as mongoose from 'mongoose';
import { isValidObjectId } from "mongoose";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) { }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  
  async createUser(user: User): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(user.password, salt);

    user.password = hashPassword;
    const newUser = await this.userModel.create(user);
    return newUser.save();
  }

  async findOne(id: string): Promise<User> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Not a valid object Id');
    }

    const user = await this.userModel.findById(id);

    if (!user) {
      throw new BadRequestException()
    }

    return user;
  }

  
}