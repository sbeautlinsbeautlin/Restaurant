import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditItemsComponent } from './add-or-edit-items.component';

describe('AddOrEditItemsComponent', () => {
  let component: AddOrEditItemsComponent;
  let fixture: ComponentFixture<AddOrEditItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrEditItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOrEditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
