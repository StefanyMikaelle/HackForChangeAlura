import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemDestaqueComponent } from './passagem-destaque.component';

describe('PassagemDestaqueComponent', () => {
  let component: PassagemDestaqueComponent;
  let fixture: ComponentFixture<PassagemDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassagemDestaqueComponent]
    });
    fixture = TestBed.createComponent(PassagemDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
