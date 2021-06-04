import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'b2-hotel-details-category',
  templateUrl: './b2-hotel-details-category.component.html',
  styleUrls: ['./b2-hotel-details-category.component.css']
})
export class B2HotelDetailsCategoryComponent {
  @Input() category: number;
  tmpTemplateArr: any[];

}
