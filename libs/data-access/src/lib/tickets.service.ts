import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ITicket } from '@workspace-nx-nestjs-ng/api-interfaces';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketsService {

    private readonly API_ROUTES = {
        getAll: () => `tickets`,
        getOne: (id: number) => `tickets/${id}`
    }

    constructor(private http: HttpClient) { }

    getAll(): Observable<ITicket[]> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http.get<ITicket[]>(this.API_ROUTES.getAll(), { headers })
            .pipe(
                this.addUniqId$(),
                catchError(this.handleError$)
            );
    }

    private addUniqId$ = () => map<ITicket[], ITicket[]>(tickets =>
        tickets.map((ticket: ITicket, index: number) =>
        ({
            id: index,
            ...ticket
        } as ITicket)
        )
    );

    private handleError$(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(() =>
            'Something bad happened; please try again later.');
    };


}
