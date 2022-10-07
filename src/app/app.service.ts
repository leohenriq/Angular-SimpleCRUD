import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TipoContato } from './enum/tipo-contato';
import { Cliente } from './model/cliente';
import { Logradouro } from './model/logradouro';

@Injectable({
  providedIn: 'root'
})
export class AppService implements InMemoryDbService {


  constructor() { }
  createDb() {
    const clientes: Cliente[] = [
      {
        id: 1,
        nome: 'Cliente 1',
        dataNascimento: new Date(),
        logradouro: new Logradouro(),
        contatos: [
          {
            id: 1,
            tipo: TipoContato.EMAIL,
            valor: "email@email.com"
          },
          {
            id: 2,
            tipo: TipoContato.TELEFONE,
            valor: "11 3333-3333"
          },
          {
            id: 3,
            tipo: TipoContato.CELULAR,
            valor: "11 99999-9999"
          }
        ]
      },
      {
        id: 2,
        nome: 'Cliente 2',
        dataNascimento: new Date(),
        logradouro: new Logradouro(),
        contatos: []
      }
    ]
    return { clientes };
  }
}
