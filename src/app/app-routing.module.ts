import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaestroPersonajeComponent } from './Components/maestro-personaje/maestro-personaje.component';
import { MaestroProductorComponent } from './Components/maestro-productor/maestro-productor.component';
import { MaestroAlquilerComponent } from './Components/maestro-alquiler/maestro-alquiler.component';
import { MaestroJuegoComponent } from './Components/maestro-juego/maestro-juego.component';
import { MaestroClienteComponent } from './Components/maestro-cliente/maestro-cliente.component';
import { ConsultaClienteComponent } from './Components/consulta-cliente/consulta-cliente.component';


const routes: Routes = [
  { path : '', component : MaestroAlquilerComponent },
  { path : 'alquiler', component : MaestroAlquilerComponent },
  { path : 'main', component : AppComponent },
  { path : 'personaje', component : MaestroPersonajeComponent },
  { path : 'productor', component : MaestroProductorComponent },
  { path : 'juego', component : MaestroJuegoComponent },
  { path : 'cliente', component : MaestroClienteComponent },
  { path : 'consulta_cliente', component : ConsultaClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
