import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { TypeBook } from '../book'
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: TypeBook = {
    id: 0,
    tittle:'',
    price: 0,
    desc: '',
    author: ''
  };
  constructor(private bookService: BookService) {}

  ngOnInit() {}
  onAddBook() {
    
    this.bookService.addBook(this.book).subscribe(data => {
      console.log(data);
    });
  }

}