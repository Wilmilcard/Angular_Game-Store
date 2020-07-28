import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
import { DataService } from 'src/app/data.service';
import { Reporte_uno } from 'src/app/Models/reporte_uno';
import { Reporte_dos } from 'src/app/Models/reporte_dos';

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

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getReporteUnoClientes().subscribe((data) => (this.clientes = data));
    this.data.getReporteDos().subscribe((data) => (this.reportesDos = data));
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

  generarReporteDos() {
    const pdf = new PdfMakeWrapper();
    
    pdf.add( new Txt(`----------------------------------------------------`).bold().end);
    pdf.add( new Txt(`Usuario que mas alquila en la tienda`).bold().fontSize(16).end);
    pdf.add( new Txt(`----------------------------------------------------`).bold().end);
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

  onChange(value) {
    this.id_cliente = value;
  }

  generarReporteTres(){

  }

  generarReporteCuatro(){

  }

  generarReporteCinco(){

  }

  generarReporteSeis(){

  }

  generarReporteSiete(){

  }

  generarReporteOcho(){

  }

  generarReporteNueve(){

  }

  generarReporteDiez(){

  }

}
