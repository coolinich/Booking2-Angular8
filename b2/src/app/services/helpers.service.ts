import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/hotel';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  convertArrayOfBooleansToObject(sourceArray: string[] | number[], booleanArray: boolean[]) {
    let newObject = {};
    booleanArray.forEach((item, index) =>
    newObject[sourceArray[index]] = item ? item : false
  );
    return newObject;
  }

  convertArrayOfBooleansToStringsArray(sourceArray: string[], booleanArray: boolean[]) {
    return sourceArray.filter((el, index) => booleanArray[index] === true);
  }

  filterHotelsByParam(hotelsData: Hotel[], paramKey: string, paramValue: string | number): Hotel[] {
    return hotelsData.filter((hotel: Hotel) => hotel[paramKey] === paramValue );
  }

  filterHotelsByLocation(hotelsData: Hotel[], locationValue: string): Hotel[] {
    return hotelsData.filter((hotel: Hotel) => hotel.location === locationValue );
  }

  filterHotelsByPriceRange(hotelsData: Hotel[], minPrice: number, maxPrice: number): Hotel[] {
    return hotelsData.filter((hotel: Hotel) => hotel.price >= minPrice && hotel.price <= maxPrice );
  }

  filterHotelsByMinPrice(hotelsData: Hotel[], minPrice: number): Hotel[] {
    return hotelsData.filter((hotel: Hotel) => hotel.price >= minPrice);
  }

  filterHotelsByMaxPrice(hotelsData: Hotel[], maxPrice: number): Hotel[] {
    return hotelsData.filter((hotel: Hotel) => hotel.price <= maxPrice);
  }

  filterHotelsByCategories(hotelsData: Hotel[], selectedCategories: string[]): Hotel[] {
    return hotelsData.filter((hotel: Hotel) => selectedCategories.indexOf(hotel.category.toString()) > -1);
  }

  filterHotelsByTypes(hotelsData: Hotel[], selectedTypes: string[]): Hotel[] {
    return hotelsData.filter((hotel: Hotel) => selectedTypes.indexOf(hotel.type.toString()) > -1);
  }

  generateRandomAlphaNumeric(len: number = 1) {
    return Math.random().toString(36).substring(2, len + 3);
  }
}
