import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ITicket } from '@workspace-nx-nestjs-ng/api-interfaces';

@Injectable({
    providedIn: 'root'
})
export class TicketsService {
    private API_URL = 'http://localhost:3333/api';

    constructor(private http: HttpClient) { }

    getAll() {
        // return this.http.get<{ tickets: ITicket[] }>(`${this.API_URL}/tickets`)
        return this.http.get(`${this.API_URL}/tickets`)
            .pipe(
                map((response: any) => {
                    return response.tickets.map((ticket: ITicket, index: number) => {
                        return {
                            uniqueId: index,
                            ...ticket
                        };
                    });
                })
            );
    }
}