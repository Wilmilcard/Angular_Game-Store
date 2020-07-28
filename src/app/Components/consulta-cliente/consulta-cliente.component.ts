import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';
import { DataService } from 'src/app/data.service';
import { Reporte_nueve } from 'src/app/Models/reporte_nueve';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {
  clientes: Cliente[];
  id_cliente: number;
  consultaCliente: Reporte_nueve[];
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllClientes().subscribe(data => (this.clientes = data));
  }

  consultar(){
    this.data.getReporteNueve(this.id_cliente).subscribe(data => (this.consultaCliente = data));
    console.log(this.consultaCliente);
  }

}
