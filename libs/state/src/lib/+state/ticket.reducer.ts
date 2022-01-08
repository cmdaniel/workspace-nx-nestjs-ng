import { ITicket } from '@workspace-nx-nestjs-ng/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as TicketActions from './ticket.actions';

export const TICKETS_FEATURE_KEY = 'ticket';


export interface State extends EntityState<ITicket> {
    selectedId?: string | number | null; // which Quotes record has been selected
    loaded: boolean; // has the Quotes list been loaded
    error?: string | null; // last known error (if any)
}


export const adapterTicket: EntityAdapter<ITicket> = createEntityAdapter<ITicket>({
    selectId: instance => +(instance?.id || -1),
    sortComparer: sortOnDestinationsAndOrigens
});

export const initialStateTicket: State = adapterTicket.getInitialState({
    // additional entity state properties
    error: undefined,
    selectedId: null,
    loaded: false
});

function sortOnDestinationsAndOrigens(a: ITicket, b: ITicket) {
    if (a.from === b.from) {
        return a.to < b.to ? -1 : 1;
    } else {
        return a.from ? -1 : 1;
    }
}

export const reducer = createReducer(
    initialStateTicket,
    on(TicketActions.init, (state) => ({ ...state, loaded: false, error: null })),
    on(TicketActions.loadTicketsSuccess,
        (state, action) => adapterTicket.setAll(action.tickets, { ...state, loaded: true })
    ),
    on(TicketActions.loadTicketsFailure,
        (state, action) => ({
            ...state,
            error: action?.error
        })
    ),
);

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapterTicket.getSelectors();


export const getSelectedId = (state: State) => state.selectedId;