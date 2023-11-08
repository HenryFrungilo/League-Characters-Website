import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeonaComponent } from './leona.component';

describe('LeonaComponent', () => {
  let component: LeonaComponent;
  let fixture: ComponentFixture<LeonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeonaComponent]
    });
    fixture = TestBed.createComponent(LeonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
