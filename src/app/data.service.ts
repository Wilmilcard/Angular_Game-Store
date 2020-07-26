import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:8080/Api';

  constructor(private http: HttpClient) { }

  //Cliente
  getAllClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>( `${this.url}/cliente.php`);
  }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/cliente.php?id=${id}`);
  }

  postCliente(client: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}/cliente.php?NOMBRE=${client.nombre}&NACIMIENTO=${client.nacimiento}&NIT=${client.nit}&TELEFONO=${client.telefono}`, null);
  }

  //Protagonista

}
