import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TablaComponent } from './tabla/tabla.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PrincipalComponent } from './principal/principal.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'resultados', component: TablaComponent},
  {path: 'graficas', component: GraficaComponent},  
  {path: 'principal', component: PrincipalComponent}, 
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, TablaComponent, GraficaComponent, PrincipalComponent, NotfoundComponent]
