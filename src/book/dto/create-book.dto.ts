import { Categoria } from "../schemas/book.schema";


export class CreateBookDto {
    readonly nome: string;
    readonly descricao: string;
    readonly autor: string;
    readonly preco: number;
    readonly categoria: Categoria;
}