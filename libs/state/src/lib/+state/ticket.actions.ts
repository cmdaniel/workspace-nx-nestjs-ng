import { ITicket } from '@workspace-nx-nestjs-ng/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Tickets Page] Init');

export const loadTicketsSuccess = createAction(
    '[Tickets/API] Load Tickets Success',
    props<{ tickets: ITicket[] }>()
);

export const loadTicketsFailure = createAction(
    '[Tickets/API] Load Tickets Failure',
    props<{ error: any }>()
);

