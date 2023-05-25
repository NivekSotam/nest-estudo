import { IsNotEmpty, IsString, IsEmail } from "class-validator";


export class SignInDto {
    
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

}