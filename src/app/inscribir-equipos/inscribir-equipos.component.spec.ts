import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirEquiposComponent } from './inscribir-equipos.component';

describe('InscribirEquiposComponent', () => {
  let component: InscribirEquiposComponent;
  let fixture: ComponentFixture<InscribirEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscribirEquiposComponent]
    });
    fixture = TestBed.createComponent(InscribirEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
