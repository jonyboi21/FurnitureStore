import { ComponentFixture, TestBed } from '@angular/core/testing';

import { furnitureListComponent } from './furniture-list.component';

describe('furnitureListComponent', () => {
  let component: furnitureListComponent;
  let fixture: ComponentFixture<furnitureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ furnitureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(furnitureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
