import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginUsuario } from '../interfaces/usuario';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new  FormGroup({
    usuario: new FormControl('', Validators.required),    
    password: new FormControl('', Validators.required)
    
  })

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.validarSesion()
  }

  validarSesion(){  
    if (sessionStorage.getItem('tipo_usuario') != "administrador"){
      this._router.navigate(['/login'])
    }else{      
      this._router.navigate(['/principal'])
    }  
  }


  Login(formLogin: loginUsuario){    
    console.log(formLogin.usuario)
    console.log(formLogin.password)   
    if (formLogin.usuario == "admin" && formLogin.password == "123456"){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Correcto',
        showConfirmButton: false,
        timer: 1500
      })
      sessionStorage.setItem("tipo_usuario", "admin") 
      sessionStorage.setItem("usuario", "admin")
      this._router.navigate(['/principal']) 
    }else
    {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: "Existieron inconveninetes al verificar el usuario",
        showConfirmButton: false,
        timer: 1500
      })
      this.loginForm.reset()

    }
    
  }

}
