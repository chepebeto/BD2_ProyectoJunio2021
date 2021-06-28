import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../modules/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent implements OnInit {
  consultaSeleccionada:any=0
  listadoOtros:any=[]
  stringJson: any;
  stringJson2: any;

  constructor(
    private servicio:ApiService
  ) { }

  ngOnInit(): void {
    this.Consulta1()
  }

  generarConsulta(){
    if (this.consultaSeleccionada==1){
      this.Consulta1()
    }else if (this.consultaSeleccionada==2){
      this.Consulta2()
    }else if (this.consultaSeleccionada==3){
      this.Consulta3()
    }else if (this.consultaSeleccionada==4){
      this.Consulta4()
    }
  }

  onChange(){
    this.listadoOtros=[]
  }


  Consulta1(){
    this.listadoOtros=[]
    this.servicio.Consulta1().subscribe(res =>{
      let respuesta: Respuesta
      let respuesta2: any
      respuesta = res
      this.stringJson = JSON.stringify(respuesta.json)
      this.stringJson2 = JSON.parse(this.stringJson)           
      respuesta2 = JSON.parse(this.stringJson2)
      for (let entry of respuesta2){                
        this.listadoOtros.push(entry) 
      }         
    })
  }


  Consulta2(){
    this.listadoOtros=[]
    this.servicio.Consulta2().subscribe(res =>{
      let respuesta: Respuesta
      let respuesta2: any
      respuesta = res
      this.stringJson = JSON.stringify(respuesta.json)
      this.stringJson2 = JSON.parse(this.stringJson)           
      respuesta2 = JSON.parse(this.stringJson2)                          
      for (let entry of respuesta2){                
        this.listadoOtros.push(entry) 
      }       
    })
  }

  Consulta3(){
    this.listadoOtros=[]
    this.servicio.Consulta3().subscribe(res =>{      
      let respuesta: Respuesta
      let respuesta2: any
      respuesta = res
      this.stringJson = JSON.stringify(respuesta.json)
      this.stringJson2 = JSON.parse(this.stringJson)           
      respuesta2 = JSON.parse(this.stringJson2)                          
      for (let entry of respuesta2){                
        this.listadoOtros.push(entry)               
      }      
    })
  }

  Consulta4(){
    this.listadoOtros=[]
    this.servicio.Consulta4().subscribe(res =>{      
      let respuesta: Respuesta
      let respuesta2: any
      respuesta = res
      this.stringJson = JSON.stringify(respuesta.json)
      this.stringJson2 = JSON.parse(this.stringJson)           
      respuesta2 = JSON.parse(this.stringJson2)                          
      for (let entry of respuesta2){                
        this.listadoOtros.push(entry) 
        console.log(entry)              
      }      
    })
  }
  
  
  

}
