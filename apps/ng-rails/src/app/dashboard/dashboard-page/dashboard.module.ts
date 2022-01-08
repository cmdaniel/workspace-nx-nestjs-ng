import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent, DialogOverviewExampleDialog } from './dashboard-page.component';
import { CardTicketComponent } from '../card-ticket/card-ticket.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DashboardPageComponent, CardTicketComponent, DialogOverviewExampleDialog]
})
export class DashboardModule { }
