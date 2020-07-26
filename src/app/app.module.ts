import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaestroProductorComponent } from './Components/maestro-productor/maestro-productor.component';
import { MaestroPersonajeComponent } from './Components/maestro-personaje/maestro-personaje.component';
import { MaestroAlquilerComponent } from './Components/maestro-alquiler/maestro-alquiler.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { MaestroJuegoComponent } from './Components/maestro-juego/maestro-juego.component';
import { MaestroClienteComponent } from './Components/maestro-cliente/maestro-cliente.component';
import { ConsultaClienteComponent } from './Components/consulta-cliente/consulta-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    MaestroProductorComponent,
    MaestroPersonajeComponent,
    MaestroAlquilerComponent,
    NavBarComponent,
    MaestroJuegoComponent,
    MaestroClienteComponent,
    ConsultaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
