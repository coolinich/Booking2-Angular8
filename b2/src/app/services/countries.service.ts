import { Injectable } from '@angular/core';
import { API_COUNTRIES_URL } from 'src/environments/environment';
import { ajax } from 'rxjs/ajax';
import { map, shareReplay, catchError } from 'rxjs/operators';
import { HandleErrorService } from './handle-error.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private handleErrorService: HandleErrorService
  ) { }

  getCountries(): Observable<any> {
    return ajax.getJSON(API_COUNTRIES_URL)
      .pipe(
        map((countries: any) => countries.map((el: any) => el = el.name)),
        shareReplay(),
        catchError(this.handleErrorService.handleError('get countries', []))
      );
  }
}
