import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PersonagemListComponent } from './personagem-list/personagem-list.component';
import { PersonagemDetailComponent } from './personagem-detail/personagem-detail.component';

const routes: Routes = [
  { path: '', component: PersonagemListComponent },
  { path: 'personagem', component: PersonagemDetailComponent },
  { path: 'personagem/:id', component: PersonagemDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
