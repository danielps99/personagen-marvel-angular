import { environment } from './../../../environments/environment';
import { ResponseBody } from './../response-entity/personagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor(private http: HttpClient) { }

  buscarPersonagensFiltrando(busca, limit, pagina: number) {
    const offset = limit * (pagina - 1);
    const parametroBusca = (busca === undefined || busca === '') ? '' : `nameStartsWith=${busca}&`;
    return this.http.get<ResponseBody>(
      `${environment.API_URL}characters?${parametroBusca}limit=${limit}&offset=${offset}&${environment.API_KEYMD5}`);
  }
}
