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

  constructor(private personagemService: PersonagemService) { }

  ngOnInit() {
    this.personagemService.getAll().subscribe(das => this.personagens = das.data.results);
    // this.personagens = this.superHeroiService.getAll();
  }

}
