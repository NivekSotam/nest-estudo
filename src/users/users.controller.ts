import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.shema';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post()
    async createUser(
      @Body()
      user: CreateUserDto
    ): Promise<User> {
      return this.userService.createUser(user)
    }

    @Get()
    async getAllUsers(): Promise<User[]>{
      return this.userService.getAllUsers();
    }

    @Get(':id')
    async findOne(
      @Param('id')
      id: string,
    ): Promise<User> {
      return this.userService.findOne(id);
    }
    
    @Delete(':id')
    async deleteOneUser(
        @Param('id')
        id: string,
    ): Promise<User> {
        return this.userService.deleteUser(id);
    }


}
