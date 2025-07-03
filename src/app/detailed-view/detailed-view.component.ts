import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {furniture} from "../furniture";

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {

  furnitureList: furniture[] = [];

  filteredList: furniture[] = [];
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }

  furniture = new furniture();

  constructor(private data: DataService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.data.fetchfurnitureById(id).subscribe(
      response =>{
        this.furniture = response;
      }, error => console.log(error)
    )
  }

  private performNameFilter(FilterBy: string): furniture[] {
    FilterBy = FilterBy.toLocaleLowerCase();
    return this.furnitureList.filter((furniture: furniture) =>
      furniture.categories.includes(FilterBy.toUpperCase()));
  }


  getAllfurniture(){
    this.data.fetchfurniture().subscribe(
      response =>{
        this.furnitureList = response;
        console.log(this.furnitureList)
      }
    )
  }
}
