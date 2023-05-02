import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component {
  ticket: Ticket;
  ticketsVendidos: Array<Ticket>;
  cantExtranjero: number;
  cantLocal: number;
  total: number;

  constructor(private ticketService: TicketService) {
    this.cantExtranjero = 0
    this.cantLocal = 0;
    this.total = 0;
    this.ticket = new Ticket();
    this.ticketsVendidos = new Array<Ticket>();     
    this.mostrarTickets();
  }

  calcularTotal():void{
    if(this.ticket.tipoEspectador == null || this.ticket.precioReal == null){
      return;
    }

    let total = this.ticket.precioReal;
    if(this.ticket.tipoEspectador === "l"){
      total -= this.ticket.precioReal * 0.2;
    }
    this.ticket.precioCobrado = total;
  }

  registrarTicket():void{
    if(this.ticket === null){
      return;
    }

    this.ticketService.addTicket(this.ticket);
    this.ticket = new Ticket();
  }

  mostrarTickets():void {
    this.ticketsVendidos = this.ticketService.getTickets();
  }

  comprobarTicket():boolean {
    console.log(this.ticket.dni === null && this.ticket.precioCobrado === null)
    return this.ticket.dni === null && this.ticket.precioCobrado === null
  }

  mostrarTicket(t: Ticket):void {
    this.ticket = new Ticket(t.id, t.dni, t.precioReal, t.tipoEspectador, t.fechaCobro, t.precioCobrado)
  }

  editarTicket(t: Ticket):void{
    this.ticketService.updateTicket(t);
  }
}
