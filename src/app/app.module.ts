import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaestroProductorComponent } from './Components/maestro-productor/maestro-productor.component';
import { MaestroAlquilerComponent } from './Components/maestro-alquiler/maestro-alquiler.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { MaestroJuegoComponent } from './Components/maestro-juego/maestro-juego.component';
import { MaestroClienteComponent } from './Components/maestro-cliente/maestro-cliente.component';
import { ConsultaClienteComponent } from './Components/consulta-cliente/consulta-cliente.component';
import { MaestroProtagonistaComponent } from './Components/maestro-protagonista/maestro-protagonista.component';

@NgModule({
  declarations: [
    AppComponent,
    MaestroProductorComponent,
    MaestroAlquilerComponent,
    NavBarComponent,
    MaestroJuegoComponent,
    MaestroClienteComponent,
    ConsultaClienteComponent,
    MaestroProtagonistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
