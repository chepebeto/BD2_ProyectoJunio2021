import { Component, OnInit } from '@angular/core'
import { ChartDataSets } from 'chart.js'
import {Color, Label} from 'ng2-charts'
import { RespuestaRanking } from '../modules/interfaces'
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  //Variables
  GraficaSeleccionada:any=0

  lineChartData: ChartDataSets[] = []

  lineChartLabels: Label[] = ["Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero", "Febrero", "Marzo", "Abril"]

  lineChartOptions:any = {responsive: true,
    title:{text: 'Ranking Bancario'},
    legend: {position: 'bottom'}
  }


  lineChartColors: Color[]=[
    {    
    borderColor: 'black',
    backgroundColor: 'rgb(176,196,222,.5)'
    }
  ]

  lineChartLegend= true
  lineChartPlugins = []
  lineCharType:any = 'line'


  listadoFinancieros:any= []
  stringJson: any;
  stringJson2: any;

  constructor(
    private servicio:ApiService
  ) { }

  ngOnInit(): void {
    
  }

  generarDatos(){
    //console.log(this.listadoFinancieros[0])
    //console.log(this.listadoFinancieros.length)
    this.lineChartData =  []
    for (let listado of this.listadoFinancieros){     
      this.lineChartData.push({
        data: 
        [ listado.Mayo,
          listado.Junio,          
          listado.Julio,
          listado.Agosto,
          listado.Septiembre,
          listado.Octubre,
          listado.Noviembre,
          listado.Diciembre,
          listado.Enero, 
          listado.Febrero,
          listado.Marzo,
          listado.Abril], label : listado.nombre
        },
        )
    }
    
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
      this.generarDatos()
    })
    
  }


  generarGrafica(){
    if (this.GraficaSeleccionada==1){
      this.ObtenerDetalleRankign()
    }
  }

}
