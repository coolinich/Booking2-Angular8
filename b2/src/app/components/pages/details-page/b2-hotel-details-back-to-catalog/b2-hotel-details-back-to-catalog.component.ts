import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryParameters } from "src/app/interfaces/query-parameters";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'b2-hotel-details-back-to-catalog',
  templateUrl: './b2-hotel-details-back-to-catalog.component.html',
  styleUrls: ['./b2-hotel-details-back-to-catalog.component.css']
})
export class B2HotelDetailsBackToCatalogComponent implements OnInit, OnDestroy {
  ifHotelsFiltered = true;
  urlParams: QueryParameters;

  private readonly routeSubject$ = new Subject();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.routeSubject$))
      .subscribe(params => {
        if (Object.keys(params).length) {
          this.ifHotelsFiltered = true;
          this.urlParams = params;
        } else {
          this.ifHotelsFiltered = false;
        }
      });
  }

  ngOnDestroy() {
    this.routeSubject$.next();
  }

}
