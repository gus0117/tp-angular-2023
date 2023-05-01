import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  listaTickets: Array<Ticket>;

  constructor() { 
    this.listaTickets = new Array<Ticket>();
  }

  /**
   * Genera una ID unica mediante generacion aleatoria y la fecha actual.
   * @returns Una ID Unica en formato string
   */
  generarId():string{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  /**
   * Retorna una lista de tickets.
   * @returns Lista de los tickets almacenados
   */
  getTickets():Array<Ticket>{
    return this.listaTickets;
  }

  /**
   * 
   * @param ticket Nuevo ticket
   */
  addTicket(ticket: Ticket):void{
    ticket.id = this.generarId();
    this.listaTickets.push(ticket);
  }


  /**
   * Elimina un ticket de la BD
   * @param ticket Ticket a eliminar
   */
  deleteTicket(ticket: Ticket):void{
    this.listaTickets = this.listaTickets.filter(t => t.id !== ticket.id)
  }

  /**
   * 
   * @param ticket Ticket Actualizado
   */
  updateTicket(ticket: Ticket):void{
    this.listaTickets = this.listaTickets.map( t => t.id === ticket.id ? ticket : t)
  }
}
