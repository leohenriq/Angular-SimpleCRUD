import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContatoComponent } from './modal-contato.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalContatoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ModalContatoModule { }
