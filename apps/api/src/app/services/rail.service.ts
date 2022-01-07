import { IRailService } from './../interface/irail-service';
import { RailOfflineService } from './rail-offline.service';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { EnRailType } from '../enum/en-rail-type.enum';
import { RailOnlineService } from './rail-online.service';

@Injectable()
export class RailService {

    constructor(
        private railOfflineSrv: RailOfflineService,
        private railOnlineSrv: RailOnlineService,
    ) { }

    factory(enRailType: EnRailType): IRailService {
        switch (enRailType) {

            case EnRailType.Online:
                return this.railOnlineSrv;

            case EnRailType.Offline:
                return this.railOfflineSrv;

        }
    }

}
