import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IActivity } from "src/app/commons/interfaces/Activities.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ActivityService {

    constructor(
        private http: HttpClient
    ){}

    getDestinations(): Observable<IActivity[]> {
        return this.http.get<IActivity[]>(`${environment.wanderAuraApi}activities`);
    }

}