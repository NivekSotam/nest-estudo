import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { isValidObjectId } from "mongoose";

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>,
    ) { }

     async pegatodosBook(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }

    async create(book: Book): Promise<Book> {
        const createBook = await this.bookModel.create(book);
        return createBook;
    }

    async findById(id: string): Promise<Book> {
        if (!isValidObjectId(id)) {
            throw new BadRequestException('Not a valid object Id');
        }

        const book = await this.bookModel.findById(id);

        if (!book) {
            throw new NotFoundException()
        }

        return book;
    }

    async updateBookId(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, book,{
            new: true,
            runValidators: true,
        } )
    }

    async deleteBookId(id: string): Promise<Book>{
        return await this.bookModel.findByIdAndDelete(id);
    }
}
