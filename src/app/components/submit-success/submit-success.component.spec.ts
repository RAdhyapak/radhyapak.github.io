import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubmitSuccessComponent } from './submit-success.component';

describe('SubmitSuccessComponent', () => {
  let component: SubmitSuccessComponent;
  let fixture: ComponentFixture<SubmitSuccessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
