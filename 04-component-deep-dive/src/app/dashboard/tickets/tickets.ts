import { Component } from '@angular/core';

import { NewTicket } from "./new-ticket/new-ticket";
import { TicketType } from './ticket.model';
import { Ticket } from "./ticket/ticket";

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
  imports: [NewTicket, Ticket]
})
export class Tickets {
  tickets: TicketType[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: TicketType = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' }
      }
      return ticket;
    });
  }
}
