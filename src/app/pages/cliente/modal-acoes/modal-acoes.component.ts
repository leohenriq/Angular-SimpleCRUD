import { ClienteService } from './../services/cliente.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { Logradouro } from 'src/app/model/logradouro';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContatoComponent } from '../../modal-contato/modal-contato.component';

@Component({
  selector: 'app-modal-acoes',
  templateUrl: './modal-acoes.component.html',
  styleUrls: ['./modal-acoes.component.scss']
})
export class ModalAcoesComponent implements OnInit {
  @Input() data: any;
  cliente: Cliente = new Cliente()
  acao: string = ""
  msgExcluir: string = "Tem certeza que deseja excluir este cliente?";
  constructor(private clienteService: ClienteService, private activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.cliente = this.data.cliente
    this.acao = this.data.acao

    if (!this.cliente) {
      this.cliente = new Cliente()
      this.cliente.logradouro = new Logradouro()
      this.cliente.contatos = new Array()
    }
  }
  obterCep() {
    this.cliente.logradouro.endereco = "Rua teste";
    this.cliente.logradouro.bairro = "Bairro teste";
    this.cliente.logradouro.cidade = "Cidade teste";
    this.cliente.logradouro.estado = "TST";
  }
  fecharForm() {
    this.activeModal.close();
  }
  abrirForm(acao: string, contato: any = null) {
    const modalRef = this.modalService.open(ModalContatoComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.data = { acao, contato };
    modalRef.result
      .then((res) => {
        if (res.acao == "Cadastrar") {
          this.cliente.contatos.push(res.contato)
        } else if (res.acao == "Editar") {
          this.cliente.contatos.map(contato => {
            if (contato.id == res.contato.id) {
              contato = res.contato
            }
          })
        } else if (res.acao == "Excluir") {
          const index = this.cliente.contatos.map(contato => {
            return contato.id;
          }).indexOf(res.contato.id);
          this.cliente.contatos.splice(index, 1)
        }
      });
  }
  cadastrar() {
    this.clienteService.createCliente(this.cliente)
      .subscribe(() => {
        this.fecharForm()
      })
  }
  editar() {
    this.clienteService.editCliente(this.cliente)
      .subscribe(() => {
        this.fecharForm()
      })
  }
  excluir() {
    this.clienteService.deleteCliente(this.cliente.id)
      .subscribe(() => {
        this.fecharForm()
      })
  }
}
