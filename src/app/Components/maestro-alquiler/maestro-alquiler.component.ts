import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/cliente';
import { DataService } from 'src/app/data.service';
import { Juego } from 'src/app/Models/juego';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-maestro-alquiler',
  templateUrl: './maestro-alquiler.component.html',
  styleUrls: ['./maestro-alquiler.component.css']
})
export class MaestroAlquilerComponent implements OnInit {
  clientes: Cliente[];
  juegos: Array<Juego> = [];
  juegoSeleccionado: Juego;
  id_cliente: number;
  id_juego: number;
  cantidad: number;
  fecha: string;
  nombre:string = "";
  precio: number;
  id_item: number = 0;
  total: number = 0;

  items: Juego[] = [];
  item: Juego;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllClientes().subscribe(data => (this.clientes = data));
    this.data.getAllJuegos().subscribe(data => (this.juegos = data));
  }

  crearAlquiler(){

    if(!this.validar()){
      return;
    }

    this.data.postAlquiler(this.id_cliente, this.total, this.fecha).subscribe(alquiler => console.log(alquiler));

    for (const a of this.items) {
      for (let b in a) {
        let iJuego;
        let cant;
        let valor;
        if(b = "id"){
          iJuego = Number(a[b]);
        }
        if(b = "stock"){
          cant = Number(a[b]);
        }
        if(b = "precio"){
          valor = Number(a[b]);
        }
        this.data.postAlquiler_det(iJuego, cant, valor).subscribe(alquiler => console.log(alquiler));
      }
    }

    this.generarPDF();

  }

  validar(alquiler = true): boolean{

    if(alquiler){
      if(!this.precio || !this.id_juego || !this.cantidad || !this.id_cliente || !this.items || !this.fecha){
        return false;
      }
    }
    else{
      if(!this.id_juego || !this.cantidad || !this.id_cliente || !this.fecha){
        return false;
      }
    }
    
    return true;
  }

  agregarJuego(){

    if(!this.validar(false)){
      return;
    }
    
    this.id_item = this.id_item + 1;
    this.data.getJuego(this.id_juego).subscribe(data => (this.nombre = data));
    this.data.getJuegoPrecio(this.id_juego).subscribe(data => (this.precio = data));
    console.log(Object.values(this.nombre));
    console.log(Object.values(this.precio));


    this.item = {
      id: this.id_item,
      nombre: Object.values(this.nombre).toString(), 
      ano: 2020, 
      id_director: 3, 
      stock: this.cantidad, 
      precio: Number(Object.values(this.precio)), 
      id_protagonista: 1
    };
    
    this.items.push(this.item);
    console.log(this.items);

    for (const a of this.items) {
      for (let b in a) {
        let cant;
        if(b = "stock"){
          cant = Number(a[b]);
        }
        if(b = "precio"){
          this.total = Number(Number(a[b]) * cant);
        }
      }
    }

  }

  quitarJuego(id){
    this.items = this.items.filter(item => item.id !== id);
  }

  generarPDF(){
    const pdf = new PdfMakeWrapper();

    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(`----    Factura de alquiler    ----`).bold().fontSize(16).end);
    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(``).end);
    pdf.add( new Txt(`JUEGO                               VALOR`).end);
    pdf.add( new Txt(`_____________________________________`).end);
    for (const a of this.items) {
      for (let b in a) {
        let nombre;
        let stock;
        let precio;
        if(b = "nombre"){
          nombre = `${a[b]}`;
        }
        if(b = "stock"){
          stock = `${a[b]}`;
        }
        if(b = "precio"){
          precio = `${a[b]}`;
        }
        pdf.add(new Txt(`${nombre}...................${precio}`).bold().italics().fontSize(14).end);
      }
    }
    pdf.add( new Txt(`_____________________________________`).end);
    pdf.create().open();
  }

  onKeyCant(event) {this.cantidad = event.target.value;}
  onKeyFecha(event) {this.fecha = event.target.value;}

}
