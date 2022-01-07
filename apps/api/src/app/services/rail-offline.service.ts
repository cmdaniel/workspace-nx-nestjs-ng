import { IRail } from './../interface/irail';
/*
https://docs.nestjs.com/providers#services
*/

import { IRailService } from './../interface/irail-service';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

export const railsFile = 'assets/data/results.json';

import * as fs from 'fs';


@Injectable()
export class RailOfflineService implements IRailService {

    getData(): Observable<IRail[] | null> {
        const jsonString = fs.readFileSync(railsFile, { encoding: 'utf8', flag: 'r' });
        const rails = JSON.parse(jsonString);
        return of(rails);
    }

}
