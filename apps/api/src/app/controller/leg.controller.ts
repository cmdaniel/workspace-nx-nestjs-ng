import { Controller, Get } from '@nestjs/common';

import { Observable } from 'rxjs';
import { ILeg } from '@workspace-nx-nestjs-ng/api-interfaces';

import { AppService } from '../services/app.service';

@Controller()
export class LegController {
  constructor(private readonly appService: AppService) { }

  @Get('legs')
  getLegs(): Observable<ILeg[]> {
    return this.appService.getLegs();
  }


}
