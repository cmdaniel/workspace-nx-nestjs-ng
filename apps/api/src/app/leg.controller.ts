import { ILeg } from './interface/ileg';
import { Controller, Get } from '@nestjs/common';

import { Observable } from 'rxjs';

import { AppService } from './app.service';

@Controller()
export class LegController {
  constructor(private readonly appService: AppService) { }

  @Get('legs')
  getLegs(): Observable<ILeg[]> {
    return this.appService.getLegs();
  }


}
