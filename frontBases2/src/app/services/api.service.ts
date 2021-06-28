import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaRanking } from '../modules/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:57915/api/consulta/"
  
  constructor(
    private http:HttpClient
  ) { }

  ObtenerRanking():Observable<RespuestaRanking>{
    let direccion = this.url + 'ranking'
    return this.http.get<RespuestaRanking>(direccion)
  }

  



}
