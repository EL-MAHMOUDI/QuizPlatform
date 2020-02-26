import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickTestComponent } from './pick-test.component';

describe('PickTestComponent', () => {
  let component: PickTestComponent;
  let fixture: ComponentFixture<PickTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
