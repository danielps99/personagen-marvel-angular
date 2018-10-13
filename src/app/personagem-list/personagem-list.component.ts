import { PersonagemService } from './../shared/service/personagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styles: []
})
export class PersonagemListComponent implements OnInit {
  personagens: any[];

  constructor(private personagemService: PersonagemService) { }

  ngOnInit() {
    this.personagemService.getAll().subscribe(das => this.personagens = das);
    // this.personagens = this.superHeroiService.getAll();
  }

}