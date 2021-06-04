import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/hotel';
import { Observable, of } from 'rxjs';
import { ALL_PROPERTIES_TYPES, ALL_FACILITIES } from 'src/mock-allhotels';
import { map, catchError, shareReplay, tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GetAllHotelsResponse } from '../interfaces/get-all-hotels-response';
import { API_URL, API_HOTELS_URL } from 'src/environments/environment';
import { HandleErrorService } from './handle-error.service';
import { BookingRequest } from '../interfaces/booking-request';

@Injectable({
  providedIn: 'root'
})
export class HotelsDataService {

  constructor(
    private http: HttpClient,
    private handleErrorService: HandleErrorService
  ) { }

  getAllHotelsData(params?: HttpParams): Observable<Hotel[]> {
    return this.http.get<GetAllHotelsResponse>(`${API_URL}/${API_HOTELS_URL}`, {params})
    .pipe(
      map((res: GetAllHotelsResponse) => res.results),
      shareReplay(),
      catchError(this.handleErrorService.handleError('Failed to get data about properties', {}))
    );

  }

  getAllHotelDataFullResponseHttp(): Observable<GetAllHotelsResponse> {
    return this.http.get<GetAllHotelsResponse>(`${API_URL}/${API_HOTELS_URL}`)
      .pipe(
        shareReplay(),
        catchError(this.handleErrorService.handleError('Failed to get full properties response', {}))
      );
  }

  getHotelDetails(id: number | string): Observable<Hotel> {
    return this.getAllHotelsData().pipe(
      map((hotels: Hotel[]) => hotels.find(hotel => hotel.id === id))
    );
  }

  getAvailablePropertiesTypes(): Observable<string[]> {
    return of(ALL_PROPERTIES_TYPES);
  }

  getAvailableFacilities(): Observable<string[]> {
    return of(ALL_FACILITIES);
  }

  bookHotel(newBooking: BookingRequest): Observable<BookingRequest> {
    return this.http.post<BookingRequest>(`${API_URL}/book`, newBooking)
      .pipe(
        catchError(this.handleErrorService.handleError('Failed to book this property response', {}))
      );
  }

  addHotel(newHotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${API_URL}/${API_HOTELS_URL}`, newHotel)
    .pipe(
      catchError(this.handleErrorService.handleError('Response to add property failed', {}))
    );
  }

  editHotel(updatedHotel: Hotel): Observable<Hotel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'token'
      })
    };
    return this.http.put<Hotel>(`http://localhost:4200/${API_HOTELS_URL}/${updatedHotel.id}`, updatedHotel, httpOptions)
    .pipe(
      catchError(this.handleErrorService.handleError('Response to edit property failed', {}))
    );
  }

}
