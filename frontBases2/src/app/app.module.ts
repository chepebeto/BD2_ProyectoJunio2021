import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { GraficaComponent } from './grafica/grafica.component';
import { TablaComponent } from './tabla/tabla.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PrincipalComponent,
    GraficaComponent,
    TablaComponent,
    NotfoundComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,   
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
