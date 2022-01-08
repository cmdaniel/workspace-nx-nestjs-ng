/*
https://docs.nestjs.com/providers#services
*/
import { IRail } from '@workspace-nx-nestjs-ng/api-interfaces';
import { IRailService } from '@workspace-nx-nestjs-ng/api-interfaces';
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
