import { Component, OnInit } from '@angular/core';
import { RespuestaRanking, Ranking } from '../modules/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  listadoFinancieros:any= []
  stringJson: any;
  stringJson2: any;
  
  

  constructor(
    private servicio:ApiService
  ) { }

  ngOnInit(): void {
    this.ObtenerDetalleRankign()
  }

  ObtenerDetalleRankign(){
    this.listadoFinancieros=[]
    this.servicio.ObtenerRanking().subscribe(res =>{
      let respuesta: RespuestaRanking
      let respuesta2: any
      respuesta = res
      this.stringJson = JSON.stringify(respuesta.json)
      this.stringJson2 = JSON.parse(this.stringJson)           
      respuesta2 = JSON.parse(this.stringJson2)            
      for (let entry of respuesta2){                
        this.listadoFinancieros.push(entry) 
      }      
    })
  }



}
