import { ITicket } from '@workspace-nx-nestjs-ng/api-interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-card-ticket',
  templateUrl: './card-ticket.component.html',
  styleUrls: ['./card-ticket.component.css']
})
export class CardTicketComponent {

  @Input() ticket: ITicket | null = null;
  @Output() buttonAction = new EventEmitter<string>();

  buttonClick(eventName: string): void {
    this.buttonAction.emit(eventName);
  }


}
