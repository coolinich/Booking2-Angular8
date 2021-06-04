import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ALL_HOTELS } from 'src/mock-allhotels';
import { Hotel } from '../interfaces/hotel';
import { HelpersService } from '../services/helpers.service';
import { GetAllHotelsResponse } from '../interfaces/get-all-hotels-response';
import { API_HOTELS_URL } from 'src/environments/environment';
import { QueryParameters } from '../interfaces/query-parameters';

@Injectable()
export class GetAllDataInterceptor implements HttpInterceptor {
  constructor(
    private helpersService: HelpersService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<GetAllHotelsResponse>> {
    let allHotels: Hotel[] = ALL_HOTELS.slice();
    const getHotelsPerPage: QueryParameters = {};

    if (localStorage.getItem('new_hotels')) {
      allHotels = allHotels.concat(JSON.parse(localStorage.getItem('new_hotels')));
    }
    if (req.url.includes(`/${API_HOTELS_URL}`) && req.method === 'GET') {
      const body = {
        count: allHotels.length,
        next: null,
        previous: null,
        results: allHotels
      };
      if (req.params.keys().length) {
        let finalHotelsData = allHotels;
        req.params.keys().forEach(param => {
          switch (param) {
            case 'location':
              getHotelsPerPage.location = req.params.get(param);
              break;
            case 'minprice':
              getHotelsPerPage.minprice = req.params.get(param);
              break;
            case 'maxprice':
              getHotelsPerPage.maxprice = req.params.get(param);
              break;
            case 'category':
              getHotelsPerPage.category = req.params.getAll('category');
              break;
            case 'propertyType':
              getHotelsPerPage.propertyType = req.params.getAll('propertyType');
              break;
            case 'page':
              getHotelsPerPage.page = +req.params.get(param);
              break;
            case 'pageSize':
              getHotelsPerPage.pageSize = +req.params.get(param);
              break;
            default:
              console.warn('Unknown parameter!');
             // finalHotelsData = this.helpersService.filterHotelsByParam(finalHotelsData, param, req.params.get(param));
          }
        });
        if (!!getHotelsPerPage.location) {
          finalHotelsData = this.helpersService.filterHotelsByLocation(finalHotelsData, getHotelsPerPage.location);
        }
        if (!!getHotelsPerPage.minprice) {
          finalHotelsData = this.helpersService.filterHotelsByMinPrice(finalHotelsData, +getHotelsPerPage.minprice);
        }
        if (!!getHotelsPerPage.maxprice) {
          finalHotelsData = this.helpersService.filterHotelsByMaxPrice(finalHotelsData, +getHotelsPerPage.maxprice);
        }
        if (!!getHotelsPerPage.category) {
          finalHotelsData = this.helpersService.filterHotelsByCategories(finalHotelsData, getHotelsPerPage.category);
        }
        if (!!getHotelsPerPage.propertyType) {
          finalHotelsData = this.helpersService.filterHotelsByTypes(finalHotelsData, getHotelsPerPage.propertyType);
        }
        if (!!getHotelsPerPage.page && !!getHotelsPerPage.pageSize) {
          finalHotelsData = finalHotelsData.slice(
            (getHotelsPerPage.page - 1) * getHotelsPerPage.pageSize,
            getHotelsPerPage.page * getHotelsPerPage.pageSize
          );
        }
        body.results = finalHotelsData;
      }

      return of(new HttpResponse(
        { status: 200, body: body }
      )).pipe();
    } else { return next.handle(req); }
  }
}
