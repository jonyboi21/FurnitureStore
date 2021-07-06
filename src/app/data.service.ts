import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Books} from "./books";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchBooks(): Observable<Books[]>{
    return this.http.get<Books[]>(`http://localhost:8080/api/v1/books`)
  }

  fetchBooksById(id: number): Observable<Books> {
    return this.http.get<Books>(`http://localhost:8080/api/v1/books/${id}`)
  }

  updateBook(id: number,books: Books): Observable<Books>{
    return this.http.put<Books>(`http://localhost:8080/api/v1/books/${id}`, books)
  }




}
