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

  constructor(private ticketService: TicketService) {
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
}
