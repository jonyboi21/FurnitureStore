import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {furniture} from "../furniture";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class furnitureListComponent implements OnInit {
  sub!: Subscription;
  filteredfurniture: furniture[] = [];
  furniture!: furniture[];
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredfurniture = this.performNameFilter(value)
  }









  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.data.fetchfurniture().subscribe({
      next: furniture =>{
        this.furniture = furniture;
        this.filteredfurniture =this.furniture;
      }
    })
  }


  getAllfurniture(){
    this.data.fetchfurniture().subscribe(
      response =>{
        this.furniture = response;
        console.log(this.furniture)
      }
    )
  }


  private performNameFilter(FilterBy: string): furniture[] {
    FilterBy = FilterBy.toLowerCase();
    return this.furniture.filter((furniture: furniture) =>
    furniture.furnitureName.toLowerCase().includes(FilterBy) +
      furniture.categories.toLowerCase().includes(FilterBy) +
        furniture.sku.toString().includes(FilterBy));
  }






  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  detailedView(id: number) {
  this.router.navigate(['app-detailed-view', id]);
  }

  editfurnitureView(id: number) {
    this.router.navigate(['app-edit-furniture', id])
  }
}
