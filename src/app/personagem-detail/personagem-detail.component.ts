import { Personagem } from './../shared/response-entity/personagem';
import { PersonagemService } from './../shared/service/personagem.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personagem-detail',
  templateUrl: './personagem-detail.component.html',
  styles: []
})
export class PersonagemDetailComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  personagem: Personagem = new Personagem();
  fotoGrande = false;

  constructor(private activatedRoute: ActivatedRoute, private personagemService: PersonagemService) { }

  ngOnInit() {
    this.subscriptions.push (
      this.activatedRoute.params.subscribe((params: any) => {
          this.subscriptions.push (
            this.personagemService.buscarById(params['id']).subscribe(r => {
              this.personagem = r.data.results[0];
            })
          );
        }
      )
    );
  }

  obterLarguraTela() {
    return document.body.clientWidth;
  }

  ampliarOuMinimizarFoto() {
    this.fotoGrande = !this.fotoGrande;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
