import { Moment } from 'moment';

export interface BookingRequest {
  hotelId: number | string;
  startDate: Moment;
  endDate: Moment;
  firstName: string;
  secondName: string;
}
