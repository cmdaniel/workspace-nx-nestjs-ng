import { IRail } from './irail';
import { Observable } from 'rxjs';

export interface IRailService {
    getData(): Observable<IRail[] | null>;
}
