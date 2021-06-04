import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Hotel } from '../interfaces/hotel';
import { HelpersService } from '../services/helpers.service';
import { API_HOTELS_URL } from 'src/environments/environment';
import { ALL_HOTELS } from 'src/mock-allhotels';

@Injectable()
export class EditPropertyInterceptor implements HttpInterceptor {
  constructor(
    private helpersService: HelpersService
  ) {}
  intercept(req: HttpRequest<Hotel>, next: HttpHandler): Observable<HttpEvent<Hotel>> {
    const parseHotelUrl = req.url.indexOf(`/${API_HOTELS_URL}/`);
    if ( parseHotelUrl > -1 && req.method === 'PUT') {
      const id = req.url.slice(parseHotelUrl + '/hotels/'.length);
      const responseBody = req.body;
      responseBody.id = id;
      return of(new HttpResponse(
        { status: 200, body: responseBody }
      )).pipe(
        tap(data => {
          const mockedHotelIndex = ALL_HOTELS.findIndex((hotel: Hotel) => hotel.id === id);
          if (mockedHotelIndex > -1) {
            ALL_HOTELS.splice(mockedHotelIndex, 1, responseBody);
          } else {
            if (localStorage.getItem('new_hotels')) {
              const availableHotels: Hotel[] = JSON.parse(localStorage.getItem('new_hotels').slice());
              const existingHotelIndex = availableHotels.findIndex((hotel: Hotel) => hotel.id === id);
              if (existingHotelIndex > -1) {
                availableHotels.splice(existingHotelIndex, 1, responseBody);
                localStorage.setItem('new_hotels', JSON.stringify(availableHotels));
              } else {
                console.error(`Hotel with ${id} was not found!`);
              }
            } else {
              console.error(`Hotel with ${id} was not found!`);
            }
          }
       })
      );
    } else {
      return next.handle(req);
    }
  }
}
