import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholAddDrinkComponent } from './alcohol-add-drink.component';

describe('AlcoholAddDrinkComponent', () => {
  let component: AlcoholAddDrinkComponent;
  let fixture: ComponentFixture<AlcoholAddDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholAddDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcoholAddDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
