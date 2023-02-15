import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholUpdateDrinkComponent } from './alcohol-update-drink.component';

describe('AlcoholUpdateDrinkComponent', () => {
  let component: AlcoholUpdateDrinkComponent;
  let fixture: ComponentFixture<AlcoholUpdateDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholUpdateDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcoholUpdateDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
