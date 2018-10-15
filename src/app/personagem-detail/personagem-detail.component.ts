import { Series } from './../shared/response-entity/serie';
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
  series: Series[] = [];
  fotoGrande = false;
  hideSeries = true;
  hideHistorias = true;
  hidehistoriaQuad = true;
  hideEventos = true;

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

  buscarSeries(ocultar: boolean, personagemId: number) {
    if (!ocultar) {
      this.subscriptions.push (
        this.personagemService.buscarSeriesByPersonagemId(personagemId).subscribe(r => {
          this.series = r.data.results;
        })
      );
    }
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
