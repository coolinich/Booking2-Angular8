import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'b2-show-location',
  templateUrl: './b2-show-location.component.html',
  styleUrls: ['./b2-show-location.component.css']
})
export class B2ShowLocationComponent {
  @Input() location: string;
  @Input() address: string;

}
