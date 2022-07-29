import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGoalComponent } from './details-goal.component';

describe('DetailsGoalComponent', () => {
  let component: DetailsGoalComponent;
  let fixture: ComponentFixture<DetailsGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
