import { IsNotEmpty, IsString, IsEmail } from "class-validator";


export class SignInDto {
    
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    readonly password: string;

}