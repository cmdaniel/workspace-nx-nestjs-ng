import { IRail } from './interface/irail';
import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class RailController {
  constructor(private readonly appService: AppService) { }

  @Get('rails')
  getRails(): Observable<IRail[]> {
    return this.appService.getRails();
  }


}
