import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
import { DataService } from 'src/app/data.service';
import { Reporte_uno } from 'src/app/Models/reporte_uno';
import { Reporte_dos } from 'src/app/Models/reporte_dos';
import { Reporte_tres } from 'src/app/Models/reporte_tres';
import { Reporte_cuatro } from 'src/app/Models/reporte_cuatro';
import { Reporte_cinco } from 'src/app/Models/reporte_cinco';
import { Director } from 'src/app/Models/director';
import { Reporte_seis } from 'src/app/Models/reporte_seis';
import { Reporte_siete } from 'src/app/Models/reporte_siete';
import { Reporte_ocho } from 'src/app/Models/reporte_ocho';
import { Reporte_nueve } from 'src/app/Models/reporte_nueve';
import { Protagonista } from 'src/app/Models/protagonista';
import { Marca } from 'src/app/Models/marca';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  reportesUno: Reporte_uno[];
  clientes: Reporte_uno[];
  id_cliente: number;

  reportesDos: Reporte_dos[];
  reportesTres: Reporte_tres[];
  reporteCuatro: Reporte_cuatro[];

  reporteCinco: Reporte_cinco[];
  directores: Director[];
  id_director: number;

  reportesSeis: Reporte_seis[];
  protagonistas: Protagonista[];
  id_protagonista: number;

  reporteSiete: Reporte_siete[];
  marcas: Marca[];
  id_marca: number;

  reporteOcho: Reporte_ocho[];
  edadInicial: string;
  edadFinal: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getReporteUnoClientes().subscribe((data) => (this.clientes = data));
    this.data.getReporteDos().subscribe((data) => (this.reportesDos = data));
    this.data.getReporteTres().subscribe((data) => (this.reportesTres = data));
    this.data.getReporteCuatro(this.formatDDMMMYYY(new Date)).subscribe((data) => (this.reporteCuatro = data));
    this.data.getAllDirectores().subscribe(data => (this.directores = data));
    this.data.getAllProtagonistas().subscribe(data => (this.protagonistas = data));
    this.data.getAllMarcas().subscribe(marcas => (this.marcas = marcas));
  }

  generarReporteUno() {
    const pdf = new PdfMakeWrapper();

    this.data.getReporteUno(this.id_cliente).subscribe((data) => (this.reportesUno = data));

    for (const a of this.reportesUno) {
      for (let b in a) {
        pdf.add(
          new Txt(`${b} = ${a[b]}`).bold().italics().end);
      }
    }
    pdf.create().open();
  }

  onChange(value) {
    this.id_cliente = value;
  }

  generarReporteDos() {
    const pdf = new PdfMakeWrapper();
    
    pdf.add( new Txt(`----------------------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(`Usuario que mas alquila en la tienda`).bold().fontSize(16).end);
    pdf.add( new Txt(`----------------------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(``).end);
    pdf.add( new Txt(``).end);
    pdf.add( new Txt(``).end);
    for (const a of this.reportesDos) {
      for (let b in a) {
        pdf.add(new Txt(`${b}: ${a[b]}`).bold().italics().fontSize(14).end);
      }
    }
    pdf.add( new Txt(``).end);

    pdf.create().open();
  }

  generarReporteTres(){
    const pdf = new PdfMakeWrapper();
    console.log(this.reportesTres);

    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(`Titulo mas rentado`).bold().fontSize(16).end);
    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(``).end);
    pdf.add( new Txt(``).end);
    for (const a of this.reportesTres) {
      for (let b in a) {
        pdf.add(new Txt(`${b}: ${a[b]}`).bold().italics().fontSize(14).end);
      }
    }
    pdf.add( new Txt(``).end);

    pdf.create().open();
  }

  generarReporteCuatro(){
    const pdf = new PdfMakeWrapper();

    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(`Venta del dia`).bold().fontSize(16).end);
    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(``).end);
    pdf.add( new Txt(``).end);
    for (const a of this.reporteCuatro) {
      for (let b in a) {
        pdf.add(new Txt(`${b}: ${a[b]}`).bold().italics().fontSize(14).end);
      }
    }

    pdf.create().open();
  }
  
  formatDDMMMYYY(date: Date): string {
    return date.getFullYear().toString() + '/' + (date.getMonth()+1).toString()  + '/' +date.getDate().toString() ;
  }

  generarReporteCinco(){
    const pdf = new PdfMakeWrapper();
    this.data.getReporteCinco(this.id_director).subscribe((data) => (this.reporteCinco = data));

    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(`Juegos del director`).bold().fontSize(16).end);
    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(``).end);
    pdf.add( new Txt(``).end);
    for (const a of this.reporteCinco) {
      for (let b in a) {
        pdf.add(new Txt(`${b}: ${a[b]}`).bold().italics().fontSize(14).end);
      }
    }

    pdf.create().open();
  }

  generarReporteSeis(){
    const pdf = new PdfMakeWrapper();
    this.data.getReporteSeis(this.id_protagonista).subscribe((data) => (this.reportesSeis = data));

    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(`Juegos del protagonista `).bold().fontSize(16).end);
    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    for (const a of this.reportesSeis) {
      for (let b in a) {
        pdf.add(new Txt(`${b}: ${a[b]}`).bold().italics().fontSize(14).end);
      }
    }

    pdf.create().open();
  }

  generarReporteSiete(){
    const pdf = new PdfMakeWrapper();
    this.data.getReporteSiete(this.id_marca).subscribe(marcas => (this.reporteSiete = marcas));

    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(`Juegos por marca `).bold().fontSize(16).end);
    pdf.add( new Txt(`-----------------------------------------`).bold().fontSize(16).end);
    for (const a of this.reporteSiete) {
      for (let b in a) {
        pdf.add(new Txt(`${b}: ${a[b]}`).bold().italics().fontSize(14).end);
      }
    }

    pdf.create().open();
  }

  generarReporteOcho(){
    const pdf = new PdfMakeWrapper();
    this.data.getReporteOcho(this.edadInicial,this.edadFinal).subscribe(marcas => (this.reporteOcho = marcas));

    pdf.add( new Txt(`------------------------------------------------------------`).bold().fontSize(16).end);
    pdf.add( new Txt(`Menos rentado por rangos de edad de 10 años en 10 años `).bold().fontSize(16).end);
    pdf.add( new Txt(`------------------------------------------------------------`).bold().fontSize(16).end);
    for (const a of this.reporteOcho) {
      for (let b in a) {
        pdf.add(new Txt(`${b}: ${a[b]}`).bold().italics().fontSize(14).end);
      }
    }

    pdf.create().open();
  }
  onKeyEdadInicial(event) {this.edadInicial = event.target.value;}
  onKeyEdadFinal(event) {this.edadFinal = event.target.value;}

}
