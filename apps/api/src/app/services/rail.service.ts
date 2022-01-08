/*
https://docs.nestjs.com/providers#services
*/
import { IRailService } from '@workspace-nx-nestjs-ng/api-interfaces'
import { RailOfflineService } from './rail-offline.service';
import { Injectable } from '@nestjs/common';
import { EnRailType } from '../enum/en-rail-type.enum';
import { RailOnlineService } from './rail-online.service';

@Injectable()
export class RailService {

    constructor(
        private railOfflineSrv: RailOfflineService,
        private railOnlineSrv: RailOnlineService,
    ) { }

    factory(enRailType: EnRailType | null = null): IRailService {
        switch (enRailType) {

            case EnRailType.Online:
                return this.railOnlineSrv;

            default:
            case EnRailType.Offline:
                return this.railOfflineSrv;

        }
    }

}
