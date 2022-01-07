import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsActions, TicketsSelectors } from '../../../../../../libs/state/src';
// FIXME: there is some configuration missing here, not allowing to use the TicketsService from the Nx library.
// import { TicketsActions, TicketsSelectors } from '@workspace-nx-nestjs-ng/state';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  tickets$ = this.store.select(TicketsSelectors.selectTicketAll);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(TicketsActions.init());
  }


}
