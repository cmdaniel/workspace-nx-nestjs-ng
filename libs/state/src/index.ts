export * from './lib/state.module';

import * as TicketsActions from './lib/+state/ticket.actions';
import * as TicketsFeature from './lib/+state/ticket.reducer';
import * as TicketsSelectors from './lib/+state/ticket.selectors';
export { TicketsActions, TicketsFeature, TicketsSelectors };
export * from './lib/+state/ticket.actions';
export * from './lib/+state/ticket.reducer';
export * from './lib/+state/ticket.selectors';
