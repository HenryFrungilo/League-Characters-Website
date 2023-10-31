import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaynComponent } from './kayn.component';

describe('KaynComponent', () => {
  let component: KaynComponent;
  let fixture: ComponentFixture<KaynComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaynComponent]
    });
    fixture = TestBed.createComponent(KaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
