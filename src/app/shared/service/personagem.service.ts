import { environment } from './../../../environments/environment';
import { ResponseBody } from './../response-entity/personagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get<ResponseBody>(`${environment.API_URL}characters?${environment.API_KEYMD5}`);
  }
}
