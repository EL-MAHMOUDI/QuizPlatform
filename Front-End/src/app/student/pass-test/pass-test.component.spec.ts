import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassTestComponent } from './pass-test.component';

describe('PassTestComponent', () => {
  let component: PassTestComponent;
  let fixture: ComponentFixture<PassTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
