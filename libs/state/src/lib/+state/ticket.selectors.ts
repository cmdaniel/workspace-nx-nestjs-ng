import { EnSort } from '@workspace-nx-nestjs-ng/api-interfaces';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './ticket.reducer';

import * as fromTicket from './ticket.reducer';

export const selectTicketState = createFeatureSelector<State>(fromTicket.TICKETS_FEATURE_KEY);
export const selectTicketAll = createSelector(selectTicketState, fromTicket.selectAll);


export const isTicketLoading = createSelector(
    selectTicketAll,
    tickets => tickets?.length <= 0,
);

export const selectTicketAllSortBy = createSelector(
    selectTicketAll,
    selectTicketState,
    (tickets, state) => state.enSort === EnSort.Time ?
        tickets?.sort((a, b) => a.DepTime.localeCompare(b.DepTime)) :
        tickets?.sort((a, b) => b.AdtPrice - a.AdtPrice)
);

export const selectTicketAllSortByAndKeyword = createSelector(
    selectTicketAll,
    selectTicketState,
    (tickets, state) => (state.enSort === EnSort.Time ?
        tickets.sort((a, b) => a.DepTime.localeCompare(b.DepTime)) :
        tickets.sort((a, b) => +(b.AdtPrice || 0) - +(a.AdtPrice || 0)))
        .filter(f => !state.keyword || f.to.toLowerCase().includes(state.keyword.toLowerCase()))
);

export const selectTicketAllSortByTime = createSelector(
    selectTicketAll,
    tickets => tickets?.sort((a, b) => a.DepTime.localeCompare(b.DepTime))
);

export const selectTicketAllSortByPrice = createSelector(
    selectTicketAll,
    tickets => tickets?.sort((a, b) => a.AdtPrice - b.AdtPrice),
);
