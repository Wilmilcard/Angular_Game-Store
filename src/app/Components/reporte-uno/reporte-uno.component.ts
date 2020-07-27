import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Cliente } from 'src/app/Models/cliente';
import { Reporte_uno } from 'src/app/Models/reporte_uno';

@Component({
  selector: 'app-reporte-uno',
  templateUrl: './reporte-uno.component.html',
  styleUrls: ['./reporte-uno.component.css']
})
export class ReporteUnoComponent implements OnInit {
  reportes: Reporte_uno[];
  clientes: Cliente[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
  
  cargarConsulta(){
    this.data.getAllClientes().subscribe(data => (this.clientes = data));
    //this.data.getReporteUno(6).subscribe(data => console.log(data));
    //this.data.getReporteUno(6).subscribe(data => (this.reportes = data));
    //console.log(this.reportes);
  }
}
