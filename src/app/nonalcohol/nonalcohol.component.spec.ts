import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonalcoholComponent } from './nonalcohol.component';

describe('NonalcoholComponent', () => {
  let component: NonalcoholComponent;
  let fixture: ComponentFixture<NonalcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonalcoholComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonalcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
