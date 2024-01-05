import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPAComponent } from './restaurant-pa.component';

describe('RestaurantPAComponent', () => {
  let component: RestaurantPAComponent;
  let fixture: ComponentFixture<RestaurantPAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantPAComponent]
    });
    fixture = TestBed.createComponent(RestaurantPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
