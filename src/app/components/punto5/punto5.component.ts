import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component {
  ticket: Ticket;
  total: number;
  ticketsVendidos: Array<Ticket>;

  constructor() {
    this.ticket = new Ticket();
    this.total = 0;
    this.ticketsVendidos = new Array<Ticket>();
/*     
    this.mostrarHistorico(); */
  }
}
