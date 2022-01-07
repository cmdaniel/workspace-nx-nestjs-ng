import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromTicket from './ticket.reducer';
import { State } from './ticket.reducer';

export const selectTicketState = createFeatureSelector<State>(fromTicket.TICKETS_FEATURE_KEY);
export const selectTicketAll = createSelector(selectTicketState, fromTicket.selectAll);


export const isTicketLoading = createSelector(
    selectTicketAll,
    tickets => tickets?.length <= 0,
);
