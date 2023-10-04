import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosComplementaresComponent } from './filtros-complementares.component';

describe('FiltrosComplementaresComponent', () => {
  let component: FiltrosComplementaresComponent;
  let fixture: ComponentFixture<FiltrosComplementaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosComplementaresComponent]
    });
    fixture = TestBed.createComponent(FiltrosComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
