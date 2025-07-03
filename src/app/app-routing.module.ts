import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {furnitureListComponent} from "./furniture-list/furniture-list.component";
import {DetailedViewComponent} from "./detailed-view/detailed-view.component";
import {EditfurnitureComponent} from "./edit-furniture/edit-furniture.component";

const routes: Routes = [
  {path: 'app-furniture-list', component: furnitureListComponent},
  {path: 'app-detailed-view/:id', component: DetailedViewComponent},
  {path: 'app-edit-furniture/:id', component: EditfurnitureComponent},
  {path: '', component: furnitureListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
