import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { furnitureListComponent } from './furniture-list/furniture-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { EditfurnitureComponent } from './edit-furniture/edit-furniture.component';

@NgModule({
  declarations: [
    AppComponent,
    furnitureListComponent,
    NavBarComponent,
    DetailedViewComponent,
    EditfurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
