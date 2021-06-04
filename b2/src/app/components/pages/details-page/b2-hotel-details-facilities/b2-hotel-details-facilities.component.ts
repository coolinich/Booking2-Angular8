import { Component, OnInit, Input } from '@angular/core';
import { HotelFacilities } from "src/app/interfaces/hotel-facilities";

@Component({
  selector: 'b2-hotel-details-facilities',
  templateUrl: './b2-hotel-details-facilities.component.html',
  styleUrls: ['./b2-hotel-details-facilities.component.css']
})
export class B2HotelDetailsFacilitiesComponent {
  @Input() facilities: HotelFacilities;

}
