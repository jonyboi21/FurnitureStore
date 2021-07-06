import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {DetailedViewComponent} from "./detailed-view/detailed-view.component";
import {EditBooksComponent} from "./edit-books/edit-books.component";

const routes: Routes = [
  {path: 'app-book-list', component: BookListComponent},
  {path: 'app-detailed-view/:id', component: DetailedViewComponent},
  {path: 'app-edit-books/:id', component: EditBooksComponent},
  {path: '', component: BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
