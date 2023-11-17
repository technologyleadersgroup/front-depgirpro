import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonComponent } from './CampeonComponent';

describe('CampeonComponent', () => {
  let component: CampeonComponent;
  let fixture: ComponentFixture<CampeonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampeonComponent]
    });
    fixture = TestBed.createComponent(CampeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
