import { Component, OnInit } from '@angular/core';

import { PersonagemService } from './../shared/service/personagem.service';
import { Personagem, Series, ItemSerie, ItemEvent } from './../shared/response-entity/personagem';

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
    // this.personagens = this.getPersonagenMock();
    this.personagemService.buscarTodos().subscribe(res => {
      this.personagens = res.data.results;
      this.qtdRegistros = res.data.total;
    });
  }

  retornarNoMaximoTresSeries(series: ItemSerie[]) {
    return series.slice(0, 3);
  }

  retornarNoMaximoTresEvents(events: ItemEvent[]) {
    return events.slice(0, 3);
  }

  getPersonagenMock () {
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
