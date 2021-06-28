import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../modules/interfaces';
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

  infoSeleccionada:any=0
  
  

  constructor(
    private servicio:ApiService
  ) { }

  ngOnInit(): void {
    //this.ObtenerDetalleCapital()
  }

  ObtenerDetalleCapital(){
    this.listadoFinancieros=[]
    this.servicio.ObtenerRankingCapital().subscribe(res =>{
      let respuesta: Respuesta
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

  ObtenerDetalleRanking(){
    this.listadoFinancieros=[]
    this.servicio.ObtenerRankingPosicion().subscribe(res =>{
      let respuesta: Respuesta
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


  generarTabla(){
    if (this.infoSeleccionada==1){
      this.ObtenerDetalleCapital()
    }else if (this.infoSeleccionada==2){
      this.ObtenerDetalleRanking()
    }
  }


  onChange(){
    this.listadoFinancieros=[]
  }



}
