import { ResponseBody } from './../response-entity/personagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor(private http: HttpClient) { }

  getAll() {
    // console.log(new Date().valueOf());
    const entao: any = 'http://gateway.marvel.com/v1/public/characters?ts=2&apikey=df1e83333a8edda66ce493ef1771c7f6&hash=f41ea432348a1aa5f45d341eafc37b4f';
    return this.http.get<ResponseBody>(entao);
  }
}
