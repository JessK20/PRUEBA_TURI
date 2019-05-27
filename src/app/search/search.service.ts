import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    public baseUrl: string;
    public token: string;
    public httpOptions:any;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.URL_TURISMO;

        this.httpOptions = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Token token=' + environment.ACCESS_TOKEN,
        });
    }

    getActivities(): Observable<any> {
        const url = this.baseUrl + 'activities.json';

        return this.http.get(url, {headers: this.httpOptions});
    }

    getRegions(): Observable<any> {
        const url = this.baseUrl + 'regions.json?only_with_packages=1';

        return this.http.get(url, {headers: this.httpOptions});
    }

    getCategories(): Observable<any> {
        const url = this.baseUrl + 'package_categories.json';

        return this.http.get(url, {headers: this.httpOptions});
    }

    getTours(filters): Observable<any> {
        const url = this.baseUrl + 'packages.json';

        return this.http.get(url, {headers: this.httpOptions, params: filters});
    }
}