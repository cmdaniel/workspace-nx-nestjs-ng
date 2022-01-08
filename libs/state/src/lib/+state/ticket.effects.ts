import { TicketsService } from '@workspace-nx-nestjs-ng/data-access';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TicketsActions from './ticket.actions';


export const error = () => catchError(err => {
    console.log('Error', err);
    return of(err);
});

@Injectable()
export class TicketsEffects {

    init$ = createEffect(() => this.actions$
        .pipe(
            ofType(TicketsActions.init),
            fetch({
                run: () => this.ticketsService.getAll()
                    .pipe(
                        map(tickets => TicketsActions.loadTicketsSuccess({ tickets })),
                        error()
                    ),
                onError: (action, error) => {
                    console.error('Error', error);
                    return TicketsActions.loadTicketsFailure({ error });
                },
            })
        )
    );

    constructor(private actions$: Actions, private ticketsService: TicketsService) { }


}
