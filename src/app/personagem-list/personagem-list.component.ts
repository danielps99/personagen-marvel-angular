import { Component, OnInit } from '@angular/core';

import { PersonagemService } from './../shared/service/personagem.service';
import { Personagem, ItemSerie, ItemEvent } from './../shared/response-entity/personagem';
import { PaginadorComponent } from '../shared/componente/paginador/paginador.component';

@Component({
  selector: 'app-personagem-list',
  templateUrl: './personagem-list.component.html',
  styles: []
})
export class PersonagemListComponent implements OnInit {
  personagens: Personagem[];
  totalRegistros: number;
  busca: '';

  constructor(private personagemService: PersonagemService) { }

  ngOnInit() {
    this.totalRegistros = 1;
    // this.personagens = this.getPersonagenMock();
    this.buscarRegistros('', 1);
  }

  retornarNoMaximoTresSeries(series: ItemSerie[]) {
    return series.slice(0, 3);
  }

  retornarNoMaximoTresEvents(events: ItemEvent[]) {
    return events.slice(0, 3);
  }

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
    this.personagemService.buscarPersonagensFiltrando(busca, 3, pagina).subscribe(res => {
      this.personagens = res.data.results;
      this.totalRegistros = res.data.total;
    });
  }

  getPersonagenMock () {
    this.totalRegistros = 1;

    return [
      {
        id: 1010354,
        name: 'Adam Warlock',
        description: 'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.',
        modified: new Date(),
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010354',
        urls: [
          {
            type: 'string',
            url: 'string'
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
          extension: 'jpg'
        },
        comics: {
          available: 1,
          returned: 1,
          collectionURI: 'string',
          items: [
            {
              resourceURI: 'string',
              name: 'string'
            }
          ]
        },
        stories: {
          available: 1,
          returned: 1,
          collectionURI: 'string',
          items: [
            {
              resourceURI: 'string',
              name: 'string',
              type: 'string'
            }
          ]
        },
        events: {
          available: 8,
          returned: 1,
          collectionURI: 'string',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
              name: 'Annihilation: Conquest'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
              name: 'Annihilation: Conquest'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
              name: 'Annihilation: Conquest'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
              name: 'Annihilation: Conquest'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
              name: 'Annihilation: Conquest'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
              name: 'Annihilation: Conquest'
            }

          ]
        },
        series: {
          available: 72,
          returned: 1,
          collectionURI: 'string',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22778',
              name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22778',
              name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22778',
              name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22778',
              name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22778',
              name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22778',
              name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)'
            }
          ]
        }
      }
    ];
  }
}
