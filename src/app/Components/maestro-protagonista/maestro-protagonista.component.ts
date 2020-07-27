import { Component, OnInit } from '@angular/core';
import { Protagonista } from 'src/app/Models/protagonista';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-maestro-protagonista',
  templateUrl: './maestro-protagonista.component.html',
  styleUrls: ['./maestro-protagonista.component.css']
})
export class MaestroProtagonistaComponent implements OnInit {
  protagonistas: Protagonista[];
  nombre: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllProtagonistasFiltro().subscribe(data => (this.protagonistas = data));
  }

  crearProtagonista(){
    const newProtagonista = { nombre: this.nombre };
    this.data.postProtagonista(newProtagonista).subscribe(protagonista => console.log(protagonista));
  }

  onKeyName(event) {this.nombre = event.target.value;}

}
