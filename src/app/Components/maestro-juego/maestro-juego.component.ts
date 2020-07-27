import { Component, OnInit } from '@angular/core';
import { Director } from 'src/app/Models/director';
import { Protagonista } from 'src/app/Models/protagonista';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-maestro-juego',
  templateUrl: './maestro-juego.component.html',
  styleUrls: ['./maestro-juego.component.css']
})
export class MaestroJuegoComponent implements OnInit {
  directores: Director[];
  protagonistas: Protagonista[];
  selectedValue: any;
  id_protagonista: number;
  id_director: number;
  nombre: string;
  stock: number;
  precio: number;
  ano: number;
  ckPc: 1;
  isCheckedPC: boolean;
  isCheckedPS: boolean;
  isCheckedXB: boolean;
  isCheckedN: boolean;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.cargarDirectores();
    this.cargarProtagonistas();
  }

  cargarProtagonistas(){
    this.data.getAllProtagonistas().subscribe(data => (this.protagonistas = data));
  }

  cargarDirectores(){
    this.data.getAllDirectores().subscribe(data => (this.directores = data));
  }

  crearJuego(){
    const newAlquiler = { nombre: this.nombre, ano: this.ano, id_director: this.id_director, stock: this.stock, precio: this.precio, id_protagonista: this.id_protagonista };
    this.data.postJuego(newAlquiler).subscribe(juego => console.log(juego));
    if(this.isCheckedPC)
    {
      const plataforma = { id_plataforma: 1 };
      this.data.postPlataformaJuego(plataforma).subscribe(plataforma => console.log(plataforma));
    }
    if(this.isCheckedPS)
    {
      const plataforma = { id_plataforma: 1 };
      this.data.postPlataformaJuego(plataforma).subscribe(plataforma => console.log(plataforma));
    }
    if(this.isCheckedXB)
    {
      const plataforma = { id_plataforma: 1 };
      this.data.postPlataformaJuego(plataforma).subscribe(plataforma => console.log(plataforma));
    }
    if(this.isCheckedN)
    {
      const plataforma = { id_plataforma: 1 };
      this.data.postPlataformaJuego(plataforma).subscribe(plataforma => console.log(plataforma));
    }

  }

  juan(){
    alert(this.ckPc);
  }

  onKeyNombre(event) {this.nombre = event.target.value;}
  onKeyStock(event) {this.stock = event.target.value;}
  onKeyValor(event) {this.precio = event.target.value;}
  onKeyAno(event) {this.ano = event.target.value;}

}
