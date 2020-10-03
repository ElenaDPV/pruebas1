import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FreelanceComponent } from './freelance/freelance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConocimientosComponent,
    TrayectoriaComponent,
    ExperienciaComponent,
    FreelanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
