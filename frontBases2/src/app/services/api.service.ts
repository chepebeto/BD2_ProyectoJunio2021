import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../modules/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:57915/api/consulta/"
  
  constructor(
    private http:HttpClient
  ) { }

  ObtenerRankingCapital():Observable<Respuesta>{
    let direccion = this.url + 'ranking'
    return this.http.get<Respuesta>(direccion)
  }

  ObtenerRankingPosicion():Observable<Respuesta>{
    let direccion = this.url + 'rank'
    return this.http.get<Respuesta>(direccion)
  }

  Login(usuario:string, pass:any):Observable<Respuesta>{
    let direccion = this.url + 'login/ {"usuario":"'+usuario+'","pasword":"'+pass+'"}'
    //console.log(direccion)
    return this.http.get<Respuesta>(direccion)
  }

  Consulta1():Observable<Respuesta>{    
    let direccion = this.url + 'consulta/{"Operacion":"A"}'
    return this.http.get<Respuesta>(direccion)
  }

  Consulta2():Observable<Respuesta>{    
    let direccion = this.url + 'consulta/{"Operacion":"B"}'
    return this.http.get<Respuesta>(direccion)
  }

  Consulta3():Observable<Respuesta>{    
    let direccion = this.url + 'consulta/{"Operacion":"C"}'
    return this.http.get<Respuesta>(direccion)
  }
  Consulta4():Observable<Respuesta>{    
    let direccion = this.url + 'consulta/{"Operacion":"D"}'
    return this.http.get<Respuesta>(direccion)
  }

  

  



}
