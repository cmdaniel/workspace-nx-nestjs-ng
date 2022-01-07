import { IRailService } from './../interface/irail-service';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { IRail } from '../interface/irail';

@Injectable()
export class RailOnlineService implements IRailService {

    /** TODO: Must get data from a webapi.
     * It can use the nestjs/axios package.
     */
    getData(): Observable<IRail[] | null> {
        return of(null);
    }


}
