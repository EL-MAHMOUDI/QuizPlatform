import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDasboardComponent } from './student-dasboard.component';

describe('StudentDasboardComponent', () => {
  let component: StudentDasboardComponent;
  let fixture: ComponentFixture<StudentDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
