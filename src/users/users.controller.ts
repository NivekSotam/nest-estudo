import { Body, Controller, Post } from '@nestjs/common';
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
      return this.userService.create(user)
    }

    
   
    
}
