import { HotelFacilities } from './hotel-facilities';

export interface Hotel {
  title: string;
  id?: number | string;
  img: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  location: string;
  address: string;
  category: number;
  type: string;
  facilities: HotelFacilities;
}
