import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonalcoholUpdateDrinkComponent } from './nonalcohol-update-drink.component';

describe('NonalcoholUpdateDrinkComponent', () => {
  let component: NonalcoholUpdateDrinkComponent;
  let fixture: ComponentFixture<NonalcoholUpdateDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonalcoholUpdateDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonalcoholUpdateDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
