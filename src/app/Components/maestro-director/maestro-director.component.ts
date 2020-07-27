import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Director } from 'src/app/Models/director';

@Component({
  selector: 'app-maestro-director',
  templateUrl: './maestro-director.component.html',
  styleUrls: ['./maestro-director.component.css']
})
export class MaestroDirectorComponent implements OnInit {
  directores: Director[];
  nombre: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllDirectores().subscribe(data => (this.directores = data));
  }

  crearDirector(){
    const newDirector = { nombre: this.nombre };
    this.data.postDirector(newDirector).subscribe(director => console.log(director));
  }

  onKeyName(event) {this.nombre = event.target.value;}

}
