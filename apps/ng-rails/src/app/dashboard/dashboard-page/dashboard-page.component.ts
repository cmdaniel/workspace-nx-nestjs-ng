import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsActions, TicketsSelectors } from '@workspace-nx-nestjs-ng/states';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  // selector: 'app-dashboard-page',
  selector: 'workspace-nx-nestjs-ng-root',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  tickets$ = this.store.select(TicketsSelectors.selectTicketAll);
  name = '';

  constructor(
    private store: Store,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(TicketsActions.init());
  }

  buttonAction($eventName: string): void {

    switch ($eventName.toUpperCase()) {
      case 'BUY':
      case 'SHARE':
        this.openDialog();
        break;
    }
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}

// TODO: Probably a good idea to move this dialog to another company and maybe to a NX Lib for reuse.
export interface DialogData {
  name: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-sharing.html',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
