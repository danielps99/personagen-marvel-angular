import { environment } from './../../../environments/environment';
import { ResponseBodyPersonagem } from './../response-entity/personagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor(private http: HttpClient) { }

  buscarById(id: number) {
    return this.http.get<ResponseBodyPersonagem>(
      `${environment.API_URL}characters/${id}?${environment.API_KEYMD5}`);
  }

  buscarPersonagensFiltrando(busca, limit, pagina: number) {
    const offset = limit * (pagina - 1);
    const parametroBusca = (busca === undefined || busca === '') ? '' : `nameStartsWith=${busca}&`;
    return this.http.get<ResponseBodyPersonagem>(
      `${environment.API_URL}characters?${parametroBusca}limit=${limit}&offset=${offset}&${environment.API_KEYMD5}`);
  }
}
