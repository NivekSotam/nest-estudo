import { IsString, IsEnum, IsInt } from "class-validator";
import { Categoria } from "../schemas/book.schema";

export class CreateBookDto {
    
    @IsString()
    readonly nome: string;

    @IsString()
    readonly descricao: string;

    @IsString()
    readonly autor: string;

    @IsInt()
    readonly preco: number;

    @IsEnum(Categoria)
    readonly categoria: Categoria;
}
