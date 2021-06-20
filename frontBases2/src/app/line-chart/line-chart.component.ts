import { Component, OnInit } from '@angular/core'
import { ChartDataSets } from 'chart.js'
import {Color, Label} from 'ng2-charts'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  //Variables
  lineChartData: ChartDataSets[] = [
    {data: [17,72,78,75,71,32,15,199,96,32,58,78], label : "Banco de Guatemala"},
    {data: [58,65,96,32,58,78,223,72,78,75,71,32], label : "Banco Industrial"},
    {data: [11,32,56,78,14,35,215,99,10,78,14,15], label : "Banrural"}
  ]

  lineChartLabels: Label[] = ["Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero", "Febrero", "Marzo"]

  lineChartOptions = {responsive: true}

  lineChartColors: Color[]=[
    {
    borderColor: 'black',
    backgroundColor: 'rgb(176,196,222,.5)'
    }
  ]

  lineChartLegend= true
  lineChartPlugins= []
  lineCharType:any = 'line'







  constructor() { }

  ngOnInit(): void {
  }

  generarDatos(){

  }

}
