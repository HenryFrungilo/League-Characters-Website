import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamilleComponent } from './camille.component';

describe('CamilleComponent', () => {
  let component: CamilleComponent;
  let fixture: ComponentFixture<CamilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamilleComponent]
    });
    fixture = TestBed.createComponent(CamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
