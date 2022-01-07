import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    TICKETS_FEATURE_KEY,
    State,
    TicketsPartialState,
    ticketsAdapter,
} from './ticket.reducer';

// Lookup the 'Tickets' feature state managed by NgRx
export const getTicketsState = createFeatureSelector<TicketsPartialState, State>(
    TICKETS_FEATURE_KEY
);

const { selectAll, selectEntities } = ticketsAdapter.getSelectors();

export const getTicketsLoaded = createSelector(
    getTicketsState,
    (state: State) => state.loaded
);

export const getTicketsError = createSelector(
    getTicketsState,
    (state: State) => state.error
);

export const getAllTickets = createSelector(getTicketsState, (state: State) =>
    selectAll(state)
);

export const getTicketsEntities = createSelector(
    getTicketsState,
    (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
    getTicketsState,
    (state: State) => state.selectedId
);

export const getSelected = createSelector(
    getTicketsEntities,
    getSelectedId,
    (entities, selectedId) => selectedId && entities[selectedId]
);

export const getRandomTickets = createSelector(getAllTickets, (tickets) => {
    const start = Math.floor(Math.random() * tickets.length);

    return tickets.slice(start, start + 10).map((ticket, index) => {
        return {
            id: index,
            ...ticket,
        };
    });
});