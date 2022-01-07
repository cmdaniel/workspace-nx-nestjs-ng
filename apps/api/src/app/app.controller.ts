import { Controller, Get } from '@nestjs/common';

import { Message } from '@workspace-nx-nestjs-ng/api-interfaces';
import { Observable } from 'rxjs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('tickets')
  getTickets(): Observable<any[]> {
    return this.appService.getTickets();
  }
}