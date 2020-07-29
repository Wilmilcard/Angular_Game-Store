import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Protagonista } from './Models/protagonista';
import { Director } from './Models/director';
import { Juego } from './Models/juego';
import { Plataforma } from './Models/plataforma';
import { Plataforma_juego } from './Models/platafora_juego';
import { Reporte_uno } from './Models/reporte_uno';
import { Reporte_dos } from './Models/reporte_dos';
import { Reporte_tres } from './Models/reporte_tres';
import { Reporte_cuatro } from './Models/reporte_cuatro';
import { Reporte_cinco } from './Models/reporte_cinco';
import { Reporte_seis } from './Models/reporte_seis';
import { Reporte_siete } from './Models/reporte_siete';
import { Reporte_ocho } from './Models/reporte_ocho';
import { Reporte_nueve } from './Models/reporte_nueve';
import { Marca } from './Models/marca';
import { Alquiler } from './Models/alquiler';
import { Alquiler_det } from './Models/alquiler_det';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  private url = 'http://localhost:8080/Api';

  constructor(private http: HttpClient) { }

  //Cliente
  getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>( `${this.url}/cliente.php`);
  }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/cliente.php?id=${id}`);
  }

  postCliente(client: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}/cliente.php?NOMBRE=${client.nombre}&NACIMIENTO=${client.nacimiento}&NIT=${client.nit}&TELEFONO=${client.telefono}`, null);
  }

  //Protagonista
  getAllProtagonistas(): Observable<Protagonista[]>{
    return this.http.get<Protagonista[]>( `${this.url}/protagonista.php`);
  }

  getAllProtagonistasFiltro(): Observable<Protagonista[]>{
    return this.http.get<Protagonista[]>( `${this.url}/protagonista.php?filtro=1`);
  }

  postProtagonista(protagonista: Protagonista): Observable<Protagonista>{
    return this.http.post<Protagonista>(`${this.url}/protagonista.php?NOMBRE=${protagonista.nombre}`, null);
  }

  //Director
  getAllDirectores(): Observable<Director[]>{
    return this.http.get<Director[]>( `${this.url}/director.php`);
  }

  postDirector(director: Director): Observable<Director>{
    return this.http.post<Protagonista>(`${this.url}/director.php?NOMBRE=${director.nombre}`, null);
  }

  //Juegos
  getAllJuegos(): Observable<Juego[]>{
    return this.http.get<Juego[]>(`${this.url}/juego.php`);
  }

  getJuego(id: number): Observable<string>{
    return this.http.get<string>(`${this.url}/juego.php?id=${id}`);
  }

  getJuegoPrecio(id: number): Observable<number>{
    return this.http.get<number>(`${this.url}/juego.php?id=${id}&precio=1`);
  }

  postJuego(juego: Juego): Observable<Juego>{
    return this.http.post<Juego>(`${this.url}/juego.php?NOMBRE=${juego.nombre}&ANO=${juego.ano}&DIRECTOR=${juego.id_director}&STOCK=${juego.stock}&PRECIO=${juego.precio}&PROTAGONISTA=${juego.id_protagonista}`, null);
  }

  postPlataformaJuego(platafoma_juego: Plataforma_juego): Observable<Plataforma>{
    return this.http.post<Protagonista>(`${this.url}/plataforma_juego.php?ID_PLATAFORMA=${platafoma_juego.id_plataforma}`, null);
  }

  //Alquiler
  postAlquiler(idCliente: number, vTotal: number, fDevolucion: string): Observable<Alquiler>{
    return this.http.post<Alquiler>(`${this.url}/alquiler.php?idCliente=${idCliente}&valorTotal=${vTotal}&fechaDevolucion=${fDevolucion}`, null);
  }

  postAlquiler_det(idJuego: number, cant: number, vUnitario: number): Observable<Alquiler_det>{
    return this.http.post<Alquiler_det>(`${this.url}/alquiler_det.php?idJuego=${idJuego}&cant=${cant}&valorUnitario=${vUnitario}`, null);
  }

  //Marca
  getAllMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>(`${this.url}/marca.php`);
  }

  //Reportes
  getReporteUno(id: number): Observable<Reporte_uno[]>{
    return this.http.get<Reporte_uno[]>( `${this.url}/reporte_uno.php?id=${id}`);
  }

  getReporteUnoClientes(): Observable<Reporte_uno[]>{
    return this.http.get<Reporte_uno[]>( `${this.url}/reporte_uno.php`);
  }

  getReporteDos(): Observable<Reporte_dos[]>{
    return this.http.get<Reporte_dos[]>( `${this.url}/reporte_dos.php`);
  }

  getReporteTres(): Observable<Reporte_tres[]>{
    return this.http.get<Reporte_tres[]>( `${this.url}/reporte_tres.php`);
  }

  getReporteCuatro(hoy: string): Observable<Reporte_cuatro[]>{
    return this.http.get<Reporte_cuatro[]>( `${this.url}/reporte_cuatro.php?fecha=${hoy}`);
  }

  getReporteCinco(id: number): Observable<Reporte_cinco[]>{
    return this.http.get<Reporte_cinco[]>( `${this.url}/reporte_cinco.php?id=${id}`);
  }

  getReporteSeis(id: number): Observable<Reporte_seis[]>{
    return this.http.get<Reporte_seis[]>( `${this.url}/reporte_seis.php?id=${id}`);
  }

  getReporteSiete(id: number): Observable<Reporte_siete[]>{
    return this.http.get<Reporte_siete[]>( `${this.url}/reporte_siete.php?id=${id}`);
  }

  getReporteOcho(edadInicial: string, edadFinal: string): Observable<Reporte_ocho[]>{
    return this.http.get<Reporte_ocho[]>( `${this.url}/reporte_ocho.php?edadInicial=${edadInicial}&edadFinal=${edadFinal}`);
  }

  getReporteNueve(id: number): Observable<Reporte_nueve[]>{
    return this.http.get<Reporte_nueve[]>( `${this.url}/reporte_nueve.php?id=${id}`);
  }
  
}
