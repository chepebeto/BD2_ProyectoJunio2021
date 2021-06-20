import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event: { target: { files: any[]; }; }){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    //reader.onload = () => {
      //this.regLibro.imagen = reader.result?.toString().split(',')[1]
    //};
  }

  

}
