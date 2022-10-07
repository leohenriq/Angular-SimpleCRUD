import { ClienteService } from './services/cliente.service';
import { Cliente } from './../../model/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = new Array();
  abrirFormulario: boolean = false;
  acao: string = "";
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe((clientes) => {
        this.clientes = clientes
      })
  }
  abrirForm(acao: string, cliente: Cliente = new Cliente()) {
    this.acao = acao
    this.abrirFormulario = true
    this.cliente = cliente
  }
  fecharForm() {
    this.acao = ""
    this.abrirFormulario = false
  }
}
