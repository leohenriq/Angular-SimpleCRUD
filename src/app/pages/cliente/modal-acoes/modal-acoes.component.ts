import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { Logradouro } from 'src/app/model/logradouro';

@Component({
  selector: 'app-modal-acoes',
  templateUrl: './modal-acoes.component.html',
  styleUrls: ['./modal-acoes.component.scss']
})
export class ModalAcoesComponent implements OnInit {
  @Output() fechar = new EventEmitter<string>();
  @Input() acao: string = ""
  @Input()  cliente: Cliente = new Cliente();
  msgExcluir: string = "Tem certeza que deseja excluir este cliente?";
  constructor() {
  }

  ngOnInit(): void {
    this.cliente.logradouro = new Logradouro()
    this.cliente.contatos = new Array()
    this.cliente.dataNascimento = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }

  obterCep() {
    this.cliente.logradouro.endereco = "Rua teste";
    this.cliente.logradouro.bairro = "Bairro teste";
    this.cliente.logradouro.cidade = "Cidade teste";
    this.cliente.logradouro.estado = "TST";
  }
  fecharForm() {
    this.fechar.emit();
  }
  cadastrar() { }
  editar() { }
  excluir() { }
}
