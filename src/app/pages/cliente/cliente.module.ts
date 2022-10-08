import { ClienteService } from './services/cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAcoesModule } from './modal-acoes/modal-acoes.module';
import { ModalContatoModule } from '../modal-contato/modal-contato.module';

@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalAcoesModule,
    ModalContatoModule
  ],
  exports: [
    ClienteComponent
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
