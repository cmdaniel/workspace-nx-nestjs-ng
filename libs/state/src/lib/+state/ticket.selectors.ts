import { EnSort } from './../../../../api-interfaces/src/lib/enum/en-sort.enum';
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

export const selectTicketAllSortByTime = createSelector(
    selectTicketAll,
    tickets => tickets?.sort((a, b) => a.DepTime.localeCompare(b.DepTime))
);

export const selectTicketAllSortByPrice = createSelector(
    selectTicketAll,
    tickets => tickets?.sort((a, b) => a.AdtPrice - b.AdtPrice),
);
