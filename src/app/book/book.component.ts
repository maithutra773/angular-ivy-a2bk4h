import { Component, OnInit } from '@angular/core';
import { TypeBook } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 books :  TypeBook[];
  validForm = false;
  detail: TypeBook;
   constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }




}