/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { ILeg } from '@workspace-nx-nestjs-ng/api-interfaces';
import { IRail } from '@workspace-nx-nestjs-ng/api-interfaces';
import { ITicket } from '@workspace-nx-nestjs-ng/api-interfaces';

@Injectable()
export class RailTransformService {

    mapToLegs(rails: IRail[]): ILeg[] {
        const legs = rails.reduce((acc: ILeg[], curr: IRail) => [...acc, ...(curr?.Legs ? curr.Legs.map((leg: ILeg) => ({ ...leg, DepTime: curr.DepTime })) : [])], []);
        return legs;
    }

    mapToTKTs(rails: IRail[]): ITicket[] {
        const legs = this.mapToLegs(rails);
        const tkts = legs.reduce((acc: ITicket[], curr: ILeg) => [...acc, ...(curr?.TKTs ? curr.TKTs.map((tkt: ITicket) => ({ ...tkt, from: curr.DepStnFull, to: curr.ArrStnFull, DepTime: curr.DepTime })) : [])], []);
        return tkts;
    }


}
