import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerticalSpaceComponent } from './vertical-space.component';

describe('VerticalSpaceComponent', () => {
  let component: VerticalSpaceComponent;
  let fixture: ComponentFixture<VerticalSpaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
