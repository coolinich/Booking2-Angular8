import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/interfaces/hotel';
import { HandleUrlParamsService } from 'src/app/services/handle-url-params.service';

@Component({
  selector: 'b2-card',
  templateUrl: './b2-card.component.html',
  styleUrls: ['./b2-card.component.css']
})
export class B2CardComponent {
  @Input() hotel: Hotel;
  @Input() adminView: boolean;
  constructor(
    private router: Router,
    private handleUrlParamsService: HandleUrlParamsService
    ) { }

  navigateToDetails() {
    this.handleUrlParamsService.changeParamToUrlAndNavigate(`all-hotels/${this.hotel.id}`, {});
 }
}

