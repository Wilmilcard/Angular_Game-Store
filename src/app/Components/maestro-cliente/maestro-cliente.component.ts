import { Component, OnInit, ɵConsole } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-cliente',
  templateUrl: './maestro-cliente.component.html',
  styleUrls: ['./maestro-cliente.component.css']
})
export class MaestroClienteComponent implements OnInit {

  clientes: Cliente[];
  nombre: string;
  nit: string;
  tel: number;
  nac: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    //this.data.getAllClientes().subscribe(data => console.log(data));
    this.data.getAllClientes().subscribe(data => (this.clientes = data));
  }

  crearCliente(){
    const newCliente = { nombre: this.nombre, nacimiento: this.nac, nit: this.nit, telefono: this.tel };
    this.data.postCliente(newCliente).subscribe(cliente => console.log(cliente));
  }

  onKeyName(event) {this.nombre = event.target.value;}
  onKeyNit(event) {this.nit = event.target.value;}
  onKeyTel(event) {this.tel = event.target.value;}
  onKeyNac(event) {this.nac = event.target.value;}

}
