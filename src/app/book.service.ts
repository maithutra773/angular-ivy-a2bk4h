import { Injectable } from '@angular/core';
import { TypeBook } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class BookService {
  API: string = 'https://61107c53c848c900171b3b2e.mockapi.io/api/products';

  constructor(private http: HttpClient) {}
  getBooks(): Observable<TypeBook[]> {
    return this.http.get<TypeBook[]>(this.API);
    
  }
  get(id): Observable<TypeBook> {
    return this.http.get<TypeBook>(`${this.API}/${id}`);
  }
  addBook(item: TypeBook): Observable<TypeBook> {
    return this.http.post<TypeBook>(this.API, item);
  }
  

}