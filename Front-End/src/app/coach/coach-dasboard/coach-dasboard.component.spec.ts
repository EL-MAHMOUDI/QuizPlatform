import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachDasboardComponent } from './coach-dasboard.component';

describe('CoachDasboardComponent', () => {
  let component: CoachDasboardComponent;
  let fixture: ComponentFixture<CoachDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
