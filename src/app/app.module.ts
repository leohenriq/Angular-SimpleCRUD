import { AppService } from './app.service';
import { ClienteService } from './pages/cliente/services/cliente.service';
import { ClienteModule } from './pages/cliente/cliente.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContatoComponent } from './pages/modal-contato/modal-contato.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    HttpClientInMemoryWebApiModule.forRoot(AppService),
    NgbModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
