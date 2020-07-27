import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Protagonista } from './Models/protagonista';
import { Director } from './Models/director';
import { Juego } from './Models/juego';
import { Plataforma } from './Models/plataforma';
import { Plataforma_juego } from './Models/platafora_juego';

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
  postJuego(juego: Juego): Observable<Juego>{
    return this.http.post<Juego>(`${this.url}/juego.php?NOMBRE=${juego.nombre}&ANO=${juego.ano}&DIRECTOR=${juego.id_director}&STOCK=${juego.stock}&PRECIO=${juego.precio}&PROTAGONISTA=${juego.id_protagonista}`, null);
  }

  postPlataformaJuego(platafoma_juego: Plataforma_juego): Observable<Plataforma>{
    return this.http.post<Protagonista>(`${this.url}/plataforma_juego.php?ID_PLATAFORMA=${platafoma_juego.id_plataforma}`, null);
  }
}
