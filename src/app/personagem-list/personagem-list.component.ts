import { Component, OnInit } from '@angular/core';

import { PersonagemService } from './../shared/service/personagem.service';
import { Personagem } from './../shared/response-entity/personagem';

@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styles: []
})
export class PersonagemListComponent implements OnInit {
  personagens: Personagem[];
  qtdRegistros: number;

  constructor(private personagemService: PersonagemService) { }

  ngOnInit() {
    this.personagemService.buscarTodos().subscribe(res => {
      this.personagens = res.data.results;
      this.qtdRegistros = res.data.total;
    });
  }
}
