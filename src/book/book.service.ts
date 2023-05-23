import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>,
    ) { }

    async FindAll(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }

    async create(book: Book): Promise<Book> {
        const createBook = await this.bookModel.create(book);
        return createBook;
    }

    async findById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id);

        if (!book) {
            throw new NotFoundException()
        }

        return book;
    }
}
