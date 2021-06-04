import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'b2-edit-hotel-page',
  templateUrl: './edit-hotel-page.component.html',
  styleUrls: ['./edit-hotel-page.component.css']
})
export class B2EditHotelPageComponent implements OnInit {
  hotel$: Observable<Hotel>;
  urlParams: ParamMap;
  constructor(
    private hotelsData: HotelsDataService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.hotel$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.urlParams = params;
        return this.hotelsData.getHotelDetails(params.get('id'));
      }
      ));
  }
}

