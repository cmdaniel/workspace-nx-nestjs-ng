import { ITicket } from '@workspace-nx-nestjs-ng/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { Message } from '@workspace-nx-nestjs-ng/api-interfaces';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';

@Controller()
export class TicketController {
  constructor(private readonly appService: AppService) { }

  // TODO: this method can be removed in the future. It was kept to test api communication easily.
  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('tickets')
  getTickets(): Observable<ITicket[]> {
    return this.appService.getTickets();
  }


}
