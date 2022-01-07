import { ITicket } from './iticket';

export interface ILeg {
    TKTs: ITicket[];
    DepStnFull: string;
    ArrStnFull: string;
}
