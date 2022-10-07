import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from 'src/app/model/cep';
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteUrl = 'api/clientes/';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clienteUrl);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    cliente.id = 0;
    return this.http.post<Cliente>(this.clienteUrl, cliente);
  }

  editCliente(cliente: Cliente): Observable<any> {
    return this.http.put(this.clienteUrl + cliente.id, cliente);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(this.clienteUrl + id);
  }
  searchCep2(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
