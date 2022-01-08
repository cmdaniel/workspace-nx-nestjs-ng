import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsActions, TicketsSelectors } from '@workspace-nx-nestjs-ng/states';

@Component({
  // selector: 'app-dashboard-page',
  selector: 'workspace-nx-nestjs-ng-root',
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
