/*
https://docs.nestjs.com/providers#services
*/
import { IRailService } from '@workspace-nx-nestjs-ng/api-interfaces';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { IRail } from '@workspace-nx-nestjs-ng/api-interfaces';

@Injectable()
export class RailOnlineService implements IRailService {

    /** TODO: Must get data from a webapi.
     * It can use the nestjs/axios package.
     */
    getData(): Observable<IRail[] | null> {
        return of(null);
    }


}
