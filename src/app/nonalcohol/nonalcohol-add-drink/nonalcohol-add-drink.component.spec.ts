import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonalcoholAddDrinkComponent } from './nonalcohol-add-drink.component';

describe('NonalcoholAddDrinkComponent', () => {
  let component: NonalcoholAddDrinkComponent;
  let fixture: ComponentFixture<NonalcoholAddDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonalcoholAddDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonalcoholAddDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
