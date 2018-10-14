import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonagemListComponent } from './personagem-list/personagem-list.component';
import { PersonagemDetailComponent } from './personagem-detail/personagem-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginadorComponent } from './shared/componente/paginador/paginador.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagemListComponent,
    PersonagemDetailComponent,
    PaginadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
