import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserSchema } from 'src/users/schemas/user.shema';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.estrategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [AuthService, PassportModule ],
  controllers: [AuthController, LocalStrategy, JwtStrategy],
})
export class AuthModule {}