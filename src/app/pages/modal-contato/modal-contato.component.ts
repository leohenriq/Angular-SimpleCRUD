import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoContato } from 'src/app/enum/tipo-contato';
import { Contato } from 'src/app/model/contato';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.scss']
})
export class ModalContatoComponent implements OnInit {
  tipoContato: typeof TipoContato = TipoContato;
  @Input() data: any;
  contato: Contato = new Contato()
  acao: string = ""
  msgExcluir: string = "Tem certeza que deseja excluir este contato?";
  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.contato = this.data.contato
    this.acao = this.data.acao

    if (!this.contato) {
      this.contato = new Contato()
    }
  }
  fecharForm() {
    this.activeModal.close({ acao: "Fechar", contato: null });
  }

  cadastrar() {
    this.contato.id = Math.random()
    this.activeModal.close({ acao: this.acao, contato: this.contato });
  }
  editar() {
    this.activeModal.close({ acao: this.acao, contato: this.contato });
  }
  excluir() {
    this.activeModal.close({ acao: this.acao, contato: this.contato });
  }
}
