import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuarioAutenticado:any = ""  
  constructor(
    private _router:Router, 
  ) { }

  ngOnInit(): void {
    this.validarSesion()
  }

  graficas(){
    this._router.navigate(['/graficas'])
  }

  otros(){
    this._router.navigate(['/otros'])
  }
  
  resultados(){
    this._router.navigate(['/resultados'])
  }


  validarSesion(){  
    if (sessionStorage.getItem('tipo_usuario') != "admin"){
      this._router.navigate(['/login'])
    }else{
      this.usuarioAutenticado = sessionStorage.getItem('usuario')      
    }  
  }

  cerrarSesion(){
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('tipo_usuario') 
    this._router.navigate(['/login'])  
  }

  principal(){
    this._router.navigate(['/principal'])
  }

  

}
