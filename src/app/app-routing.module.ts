import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaestroAlquilerComponent } from './Components/maestro-alquiler/maestro-alquiler.component';
import { MaestroJuegoComponent } from './Components/maestro-juego/maestro-juego.component';
import { MaestroClienteComponent } from './Components/maestro-cliente/maestro-cliente.component';
import { ConsultaClienteComponent } from './Components/consulta-cliente/consulta-cliente.component';
import { MaestroProtagonistaComponent } from './Components/maestro-protagonista/maestro-protagonista.component';
import { MaestroDirectorComponent } from './components/maestro-director/maestro-director.component';
import { ReporteUnoComponent } from './components/reporte-uno/reporte-uno.component';


const routes: Routes = [
  { path : '', component : MaestroAlquilerComponent },
  { path : 'alquiler', component : MaestroAlquilerComponent },
  { path : 'main', component : AppComponent },
  { path : 'protagonista', component : MaestroProtagonistaComponent },
  { path : 'juego', component : MaestroJuegoComponent },
  { path : 'cliente', component : MaestroClienteComponent },
  { path : 'consulta_cliente', component : ConsultaClienteComponent },
  { path : 'director', component : MaestroDirectorComponent },
  { path : 'reporte_uno', component : ReporteUnoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
