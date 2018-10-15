import { ItemEvent } from './../shared/response-entity/event';
import { ItemSerie } from './../shared/response-entity/serie';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonagemService } from './../shared/service/personagem.service';
import { Personagem} from './../shared/response-entity/personagem';

@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styles: []
})
export class PersonagemListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  personagens: Personagem[];
  totalRegistros: number;
  qtdRegistroPorPagina = 3;
  busca: '';

  constructor(private personagemService: PersonagemService) { }

  ngOnInit() {
    this.buscarRegistros('', 1);
  }

  retornarNoMaximoTresSeries(series: ItemSerie[]) {
    return series.slice(0, 3);
  }

  retornarNoMaximoTresEvents(events: ItemEvent[]) {
    return events.slice(0, 3);
  }

  /*
    Função faz um delay antes da requisiçao API. Requisita depois que usuario parar de digitar por 800 milisegundos
  */
  filtrarEntradaUsuarioBusca($event) {
    const buscaDigitada = this.busca = $event.target.value;
    const delay = (time) => (result) => new Promise(resolve => setTimeout(() => resolve(result), time));
    Promise.resolve(buscaDigitada)
      .then(delay(800))
        .then( result => {
            if ( buscaDigitada !== '' && buscaDigitada === this.busca ) {
              this.buscarRegistros(this.busca, 1);
            }
          }
      );
   }

  navegarPagina($event) {
    this.buscarRegistros(this.busca, $event);
  }

  buscarRegistros(busca: string, pagina: number) {
    this.atribuirQtdRegistroPorPagina();
    this.subscription = this.personagemService.buscarPersonagensFiltrando(busca, this.qtdRegistroPorPagina, pagina).subscribe(res => {
      this.personagens = res.data.results;
      this.totalRegistros = res.data.total;
    });
  }

  atribuirQtdRegistroPorPagina() {
    this.qtdRegistroPorPagina = document.body.clientWidth > 360 ? 3 : 4;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
