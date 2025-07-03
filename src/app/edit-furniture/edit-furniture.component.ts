import {Component, Inject, OnInit} from '@angular/core';
import {furniture} from "../furniture";
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
    selector: 'app-edit-furniture',
    templateUrl: './edit-furniture.component.html',
    styleUrls: ['./edit-furniture.component.css'],
    standalone: false
})
export class EditfurnitureComponent implements OnInit {

  furniture = new furniture();
  furnitureForm!: UntypedFormGroup
  constructor(private  data: DataService, private activatedRoute: ActivatedRoute, @Inject(DOCUMENT) private _document: Document) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.data.fetchfurnitureById(id).subscribe(
      response => {
        this.furniture = response;
      }
    )
this.furnitureForm = new UntypedFormGroup({
  'id': new UntypedFormControl(id),
  'furnitureName': new UntypedFormControl(),
  'categories': new UntypedFormControl(),
  'price': new UntypedFormControl(),
  'inStock': new UntypedFormControl(),
  'sku': new UntypedFormControl(),
  'description': new UntypedFormControl(),
  'imageUrl': new UntypedFormControl()
})

  }

  editfurnitureButton(){
    const id = this.activatedRoute.snapshot.params[`id`]

    this.data.updatefurniture(id, this.furnitureForm.getRawValue())
      .subscribe(
        response =>{
          // @ts-ignore
          this._document.defaultView.location.reload(); }
      );
  }

}
