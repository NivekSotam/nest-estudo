import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService){}


    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.bookService.FindAll();
    }

    @Post()
    async createBook(
        @Body()
        book,
    ): Promise<Book> {
        return this.bookService.create(book)
    }
}
