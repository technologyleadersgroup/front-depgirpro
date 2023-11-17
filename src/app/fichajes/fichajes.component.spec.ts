import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajesComponent } from './fichajes.component';

describe('FichajesComponent', () => {
  let component: FichajesComponent;
  let fixture: ComponentFixture<FichajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichajesComponent]
    });
    fixture = TestBed.createComponent(FichajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
