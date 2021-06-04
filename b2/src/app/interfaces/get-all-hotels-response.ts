import { Hotel } from './hotel';
export interface GetAllHotelsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Hotel[];
}
