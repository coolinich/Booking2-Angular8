import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Hotel } from '../interfaces/hotel';
import { HelpersService } from '../services/helpers.service';
import { API_HOTELS_URL } from 'src/environments/environment';

@Injectable()
export class AddPropertyInterceptor implements HttpInterceptor {
  constructor(
    private helpersService: HelpersService
  ) {}
  intercept(req: HttpRequest<Hotel>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(`/${API_HOTELS_URL}`) && req.method === 'POST') {
      if (req.headers.get('Authorization') === 'somerandomtoken') {
        const responseBody = req.body;
        responseBody.id = this.helpersService.generateRandomAlphaNumeric(7);
        return of(new HttpResponse(
          { status: 200, body: responseBody }
        )).pipe(
          tap(data => {
            let newHotels: Hotel[] = [];
            if (localStorage.getItem('new_hotels')) {
              newHotels = JSON.parse(localStorage.getItem('new_hotels').slice());
            }
            newHotels.push(responseBody);
            localStorage.setItem('new_hotels', JSON.stringify(newHotels));
         })
        );
      } else {
        return of(new HttpResponse(
          { status: 401, body: {
            errorCode: 401,
            errorMessage: 'Not authorized!'
          }}
        ));
      }
    } else {
      return next.handle(req);
    }
  }
}
