import { IRail } from '@workspace-nx-nestjs-ng/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';

@Controller()
export class RailController {
  constructor(private readonly appService: AppService) { }

  @Get('rails')
  getRails(): Observable<IRail[]> {
    return this.appService.getRails();
  }


}
