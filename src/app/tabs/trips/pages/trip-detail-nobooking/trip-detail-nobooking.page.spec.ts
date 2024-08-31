import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripDetailNobookingPage } from './trip-detail-nobooking.page';

describe('TripDetailNobookingPage', () => {
  let component: TripDetailNobookingPage;
  let fixture: ComponentFixture<TripDetailNobookingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDetailNobookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
