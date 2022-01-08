import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class HttpBaseUrlInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        try {
            if (['GET', 'POST', 'PUT', 'DELETE'].includes(req.method)) {
                const dupReq = req.clone({
                    setHeaders: { Authorization: `Bearer xxx` },
                    url: `${environment.apiBaseUrl}/${req.url}`
                });
                return next.handle(dupReq);
            }
            return next.handle(req);
        } catch (error: any) {
            console.error(this.constructor.name, 'intercept', error.message);
        }
        return next.handle(req);
    }
}


@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpBaseUrlInterceptor,
            multi: true,
        },
    ],
})
export class HttpBaseUrlInterceptorModule { }
