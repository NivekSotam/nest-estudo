import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) { }


    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.FindAll();
    }

    @Post()
    async createBook(
        @Body()
        book: CreateBookDto
    ): Promise<Book> {
        return this.bookService.create(book)
    }

    @Get(':id')
    async getOneBook(
        @Param('id')
        id: string,
    ): Promise<Book> {
        return this.bookService.findById(id);
    }
}
