/*
https://docs.nestjs.com/providers#services
*/
import { HttpService } from '@nestjs/axios';
import { IRailService } from '@workspace-nx-nestjs-ng/api-interfaces';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { IRail } from '@workspace-nx-nestjs-ng/api-interfaces';

@Injectable()
export class RailOnlineService implements IRailService {

    readonly url = 'https://cmdaniel-dev-portfolio.s3.amazonaws.com/data/results.json';

    constructor(
        private http: HttpService
    ) { }

    getData(): Observable<IRail[] | null> {
        return this.http.get(this.url)
            .pipe(
                map<any, IRail[]>(response => response.data)
            );
    }


}
