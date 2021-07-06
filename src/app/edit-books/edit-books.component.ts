import {Component, Inject, OnInit} from '@angular/core';
import {Books} from "../books";
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  books = new Books();
  bookForm!: FormGroup
  constructor(private  data: DataService, private activatedRoute: ActivatedRoute, @Inject(DOCUMENT) private _document: Document) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.data.fetchBooksById(id).subscribe(
      response => {
        this.books = response;
      }
    )
this.bookForm = new FormGroup({
  'id': new FormControl(id),
  'bookName': new FormControl(),
  'categories': new FormControl(),
  'price': new FormControl(),
  'inStock': new FormControl(),
  'sku': new FormControl(),
  'description': new FormControl(),
  'imageUrl': new FormControl()
})

  }

  editBookButton(){
    const id = this.activatedRoute.snapshot.params[`id`]

    this.data.updateBook(id, this.bookForm.getRawValue())
      .subscribe(
        response =>{
          // @ts-ignore
          this._document.defaultView.location.reload(); }
      );
  }

}
