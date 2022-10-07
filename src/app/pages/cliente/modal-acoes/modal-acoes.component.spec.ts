import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcoesComponent } from './modal-acoes.component';

describe('ModalAcoesComponent', () => {
  let component: ModalAcoesComponent;
  let fixture: ComponentFixture<ModalAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
