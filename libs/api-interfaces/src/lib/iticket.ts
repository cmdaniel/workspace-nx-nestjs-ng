export interface ITicket {
    id?: number;
    from: string;
    to: string;
    DepTime: string;
    AdtPrice: number;
    CanTicketOnDeparture: string;
    ChdPrice: number;
    MaxAdtPerTck: number;
    MaxChdPerTck: number;
    MaxPaxPerTck: number;
    MinAdtPerTck: number;
    MinChdPerTck: number;
    MinPaxPerTck: number;
    Operator: string;
    ProfileShouldNotBook: string;
    SingleOrReturn: string;
    TicketCode: string;
    TicketDescription: string;
}
