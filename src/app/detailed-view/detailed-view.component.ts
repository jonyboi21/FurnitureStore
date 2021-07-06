import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Books} from "../books";

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {

  booksList: Books[] = [];

  filteredList: Books[] = [];
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }

  book = new Books();

  constructor(private data: DataService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.data.fetchBooksById(id).subscribe(
      response =>{
        this.book = response;
      }, error => console.log(error)
    )
  }

  private performNameFilter(FilterBy: string): Books[] {
    FilterBy = FilterBy.toLocaleLowerCase();
    return this.booksList.filter((book: Books) =>
      book.categories.includes(FilterBy.toUpperCase()));
  }


  getAllBooks(){
    this.data.fetchBooks().subscribe(
      response =>{
        this.booksList = response;
        console.log(this.booksList)
      }
    )
  }
}
