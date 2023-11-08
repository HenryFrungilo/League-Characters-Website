import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZedComponent } from './zed.component';

describe('ZedComponent', () => {
  let component: ZedComponent;
  let fixture: ComponentFixture<ZedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZedComponent]
    });
    fixture = TestBed.createComponent(ZedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
