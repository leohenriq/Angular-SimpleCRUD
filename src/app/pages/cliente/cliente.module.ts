import { ClienteService } from './services/cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAcoesModule } from './modal-acoes/modal-acoes.module';

@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalAcoesModule
  ],
  exports: [
    ClienteComponent
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
