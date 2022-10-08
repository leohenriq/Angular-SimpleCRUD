import { ClienteService } from './services/cliente.service';
import { Cliente } from './../../model/cliente';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAcoesComponent } from './modal-acoes/modal-acoes.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = new Array();
  constructor(private clienteService: ClienteService, private modalService: NgbModal) { }
  obterClientes() {
    this.clientes = []
    this.clienteService.getClientes()
      .subscribe((clientes) => {
        this.clientes = clientes
      })
  }
  ngOnInit(): void {
    this.obterClientes()
  }
  abrirForm(acao: string, cliente: any = null) {
    if (cliente) {
      const dtNasc = cliente.dataNascimento
      cliente.dataNascimento = dtNasc ? formatDate(dtNasc, 'yyyy-MM-dd', 'en') : ""
    }

    const modalRef = this.modalService.open(ModalAcoesComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.data = { acao, cliente };
    modalRef.result
      .then(() => {
        this.obterClientes()
      });
  }
}
