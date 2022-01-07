import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Message } from '@workspace-nx-nestjs-ng/api-interfaces';
import { catchError, map, Observable, of, tap, from, reduce } from 'rxjs';

import * as fs from 'fs';

export const railsFile = 'assets/data/results.json';

@Injectable()
export class AppService {

  constructor(
    private http: HttpService,
  ) { }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getTickets(): Observable<any[]> {
    const jsonString = fs.readFileSync(railsFile, { encoding: 'utf8', flag: 'r' });
    const rails = JSON.parse(jsonString);
    const legs = rails.reduce((acc: any[], curr: any) => [...acc, ...(curr?.Legs || [])], []);
    const tkts = legs.reduce((acc: any[], curr: any) => [...acc, ...(curr?.TKTs ? curr.TKTs.map((tkt: any) => ({ ...tkt, from: curr.DepStnFull, to: curr.ArrStnFull })) : [])], []);
    return of(tkts)
      .pipe(
        tap(t => console.log(t)),
        catchError((err, obs) => {
          console.log(err);
          return of(err);
        })
      );
  }


}
