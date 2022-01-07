import { ILeg } from '@workspace-nx-nestjs-ng/api-interfaces';
import { IRail } from '@workspace-nx-nestjs-ng/api-interfaces';
import { ITicket } from '@workspace-nx-nestjs-ng/api-interfaces';
import { RailTransformService } from './rail-transform.service';
import { RailService } from './rail.service';
import { Injectable } from '@nestjs/common';
import { Message } from '@workspace-nx-nestjs-ng/api-interfaces';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { EnRailType } from '../enum/en-rail-type.enum';

export const error = () => catchError((err, obs) => {
  console.log(err);
  return of(err);
});

export const audit = () => tap(t => console.log(t));

@Injectable()
export class AppService {

  private readonly rail;

  constructor(
    private railSrv: RailService,
    private dataTransformSrv: RailTransformService
  ) {
    this.rail = this.railSrv.factory(EnRailType.Offline);
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getRails(): Observable<IRail[]> {
    return this.rail.getData()
      .pipe(
        audit(),
        error()
      );
  }

  getLegs(): Observable<ILeg[]> {
    return this.rail.getData()
      .pipe(
        map(rails => rails ? this.dataTransformSrv.mapToLegs(rails) : null),
        audit(),
        error()
      );
  }

  getTickets(): Observable<ITicket[]> {
    return this.rail.getData()
      .pipe(
        map(rails => rails ? this.dataTransformSrv.mapToTKTs(rails) : null),
        audit(),
        error()
      );
  }


}
