import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAcoesComponent } from './modal-acoes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalAcoesComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ModalAcoesComponent]
})
export class ModalAcoesModule { }
