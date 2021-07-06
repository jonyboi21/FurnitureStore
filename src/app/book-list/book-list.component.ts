import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {Books} from "../books";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  sub!: Subscription;
  filteredBooks: Books[] = [];
  books!: Books[];
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredBooks = this.performNameFilter(value)
  }









  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.data.fetchBooks().subscribe({
      next: books =>{
        this.books = books;
        this.filteredBooks =this.books;
      }
    })
  }


  getAllBooks(){
    this.data.fetchBooks().subscribe(
      response =>{
        this.books = response;
        console.log(this.books)
      }
    )
  }


  private performNameFilter(FilterBy: string): Books[] {
    FilterBy = FilterBy.toLowerCase();
    return this.books.filter((book: Books) =>
    book.bookName.toLowerCase().includes(FilterBy) +
      book.categories.toLowerCase().includes(FilterBy) +
        book.sku.toString().includes(FilterBy));
  }






  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  detailedView(id: number) {
  this.router.navigate(['app-detailed-view', id]);
  }

  editBookView(id: number) {
    this.router.navigate(['app-edit-books', id])
  }
}
