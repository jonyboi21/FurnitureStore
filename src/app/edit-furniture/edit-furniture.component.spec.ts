import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfurnitureComponent } from './edit-furniture.component';

describe('EditfurnitureComponent', () => {
  let component: EditfurnitureComponent;
  let fixture: ComponentFixture<EditfurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
