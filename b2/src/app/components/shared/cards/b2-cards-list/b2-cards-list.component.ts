import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { Hotel } from 'src/app/interfaces/hotel';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { HandleUrlParamsService } from 'src/app/services/handle-url-params.service';

@Component({
  selector: 'b2-cards-list',
  templateUrl: './b2-cards-list.component.html',
  styleUrls: ['./b2-cards-list.component.css']
})
export class B2CardsListComponent implements OnInit, OnDestroy {
  allHotels$: Observable<Hotel[]>;
  allHotelsNotPaged$: Observable<Hotel[]>;
  ifSignedIn: boolean;
  appliedFiltersParams: HttpParams;
  appliedFiltersParamsNotPaged: HttpParams;
  pageSize: number;
  collectionSize: number;
  activePage: number;

  private readonly routeSubject$ = new Subject();

  constructor(
    private hotelsDataService: HotelsDataService,
    private handleUrlParamsService: HandleUrlParamsService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.pageSize = 2;
  }

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.routeSubject$))
      .subscribe(params => {
        if (!Object.entries(params).length) {
          this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels',
          {
            pageSize: this.pageSize,
            page: 1
          });
        }

        this.appliedFiltersParams = new HttpParams({
          fromObject: params
        });

        const filtersNotPaged = Object.assign({}, params);
        delete filtersNotPaged.page;
        delete filtersNotPaged.pageSize;
        this.appliedFiltersParamsNotPaged = new HttpParams({
          fromObject: filtersNotPaged
        });

        this.allHotels$ = this.hotelsDataService.getAllHotelsData(this.appliedFiltersParams);
        this.allHotelsNotPaged$ = this.hotelsDataService.getAllHotelsData(this.appliedFiltersParamsNotPaged);
        this.activePage = params.page || 1;
        this.ifSignedIn = this.authService.isSignedIn;
      });
    }

  ngOnDestroy() {
    this.routeSubject$.next();
  }


}
