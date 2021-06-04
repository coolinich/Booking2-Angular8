import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'b2-show-type',
  templateUrl: './b2-show-type.component.html',
  styleUrls: ['./b2-show-type.component.css']
})
export class B2ShowTypeComponent {
  @Input() propertyType;
}
