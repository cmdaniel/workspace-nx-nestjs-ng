/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ILeg } from '../interface/ileg';
import { IRail } from '../interface/irail';
import { ITicket } from '../interface/iticket';

@Injectable()
export class RailTransformService {

    mapToLegs(rails: IRail[]): ILeg[] {
        const legs = rails.reduce((acc: ILeg[], curr: IRail) => [...acc, ...(curr?.Legs || [])], []);
        return legs;
    }

    mapToTKTs(rails: IRail[]): ITicket[] {
        const legs = this.mapToLegs(rails);
        const tkts = legs.reduce((acc: ITicket[], curr: ILeg) => [...acc, ...(curr?.TKTs ? curr.TKTs.map((tkt: ITicket) => ({ ...tkt, from: curr.DepStnFull, to: curr.ArrStnFull })) : [])], []);
        return tkts;
    }

}
