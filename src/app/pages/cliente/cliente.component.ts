import { ClienteService } from './services/cliente.service';
import { Cliente } from './../../model/cliente';
import { Component, OnInit } from '@angular/core';
import { Logradouro } from 'src/app/model/logradouro';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  clientes: Cliente[] = new Array();

  constructor(private clienteService: ClienteService) {
    this.cliente.logradouro = new Logradouro()
    this.cliente.contatos = new Array()
  }

  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe((clientes) => {
        this.clientes = clientes
        this.cliente = clientes[0]
        this.cliente.dataNascimento = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      })
  }

  obterCep() {
    this.cliente.logradouro.endereco = "Rua teste";
    this.cliente.logradouro.bairro = "Bairro teste";
    this.cliente.logradouro.cidade = "Cidade teste";
    this.cliente.logradouro.estado = "TST";
  }
}
