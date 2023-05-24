import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Categoria {
    AVENTURA = 'Aventura',
    FANTASIA = 'Fantasia',
    FICCAO = 'Ficcao',
    TECNOLOGIA = 'Tecnologia',
}

@Schema({
    timestamps: true
})

export class Book {

    @Prop()
    nome: string;

    @Prop()
    descricao: string;

    @Prop()
    autor: string;

    @Prop()
    preco: number;

    @Prop()
    categoria: Categoria
}

export const BookSchema = SchemaFactory.createForClass(Book)