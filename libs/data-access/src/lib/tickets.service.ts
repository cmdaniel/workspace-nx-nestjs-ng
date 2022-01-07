import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ITicket } from '../../../api-interfaces/src';

@Injectable({
    providedIn: 'root'
})
export class TicketsService {
    private API_URL = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<{ tickets: ITicket[] }>(`${this.API_URL}/tickets`)
            .pipe(
                map(response => {
                    return response.tickets.map((ticket, index) => {
                        return {
                            uniqueId: index,
                            ...ticket
                        };
                    });
                })
            );
    }
}