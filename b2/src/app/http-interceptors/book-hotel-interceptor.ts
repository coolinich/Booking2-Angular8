import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BookingRequest } from '../interfaces/booking-request';
import { tap } from 'rxjs/operators';

@Injectable()
export class BookHotelInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<BookingRequest>, next: HttpHandler): Observable<HttpEvent<BookingRequest>> {
    if (req.url.includes('/book')) {
      return of(new HttpResponse(
        { status: 200, body: req.body }
      ))
    } else {
      return next.handle(req);
    }
  }
}
