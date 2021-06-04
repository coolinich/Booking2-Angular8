import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { B2FilterByStarsComponent } from '../shared/filters/b2-filter-by-stars/b2-filter-by-stars.component';
import { B2FiltersAllDialogComponent } from '../shared/filters/b2-filters-all-dialog/b2-filters-all-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { B2FilterByPriceComponent } from '../shared/filters/b2-filter-by-price/b2-filter-by-price.component';
import { FilterByPrice } from "src/app/interfaces/filter-by-price";
import { B2FilterByLocationComponent } from '../shared/filters/b2-filter-by-location/b2-filter-by-location.component';
import { B2FilterByTypeComponent } from '../shared/filters/b2-filter-by-type/b2-filter-by-type.component';
import { HandleUrlParamsService } from 'src/app/services/handle-url-params.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QueryParameters } from 'src/app/interfaces/query-parameters';

@Component({
  selector: 'b2-filters-list',
  templateUrl: './b2-filters-list.component.html',
  styleUrls: ['./b2-filters-list.component.css']
})
export class B2FiltersListComponent implements OnInit, OnDestroy {
  toggleBtnLocationColor = false;
  toggleBtnStarsColor = false;
  toggleBtnTypeColor = false;
  toggleBtnPriceColor = false;

  filterByLocation: string;
  filterByStars: number;
  filterByType: string[];
  filterByMinPrice: number;
  filterByMaxPrice: number;

  private readonly routeSubject$ = new Subject();

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private handleUrlParamsService: HandleUrlParamsService
  ) { }

  ngOnInit() {
    this.route.queryParams
    .pipe(takeUntil(this.routeSubject$))
    .subscribe(params => {
      if (Object.keys(params).length) {
        Object.keys(params).forEach(param => {
          switch (param) {
            case 'location':
              this.toggleBtnLocationColor = true;
              break;
            case 'category':
              this.toggleBtnStarsColor = true;
              break;
            case 'propertyType':
              this.toggleBtnTypeColor = true;
              break;
            case 'minprice':
              this.toggleBtnPriceColor = true;
              break;
            case 'maxprice':
              this.toggleBtnPriceColor = true;
              break;
            default:
              this.toggleBtnLocationColor = false;
              this.toggleBtnStarsColor = false;
              this.toggleBtnTypeColor = false;
              this.toggleBtnPriceColor = false;
          }
        });
      } else {
        this.toggleBtnLocationColor = false;
        this.toggleBtnStarsColor = false;
        this.toggleBtnTypeColor = false;
        this.toggleBtnPriceColor = false;
      }
    });
  }

  ngOnDestroy() {
    this.routeSubject$.next();
  }

  openFilterByLocationDialog(): void {
    const dialogRef = this.dialog.open(B2FilterByLocationComponent, {
      width: '300px',
      position: {
        top: '120px',
        left: '110px'
      },
      data: {},
      hasBackdrop: true
    });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.routeSubject$))
    .subscribe(result => {
      if (result) {
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels', {location: result});
        this.toggleBtnLocationColor = true;
      } else {
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels', {location: null});
        this.toggleBtnLocationColor = false;
      }
    });
  }


  openFilterByStarsDialog(): void {
    const dialogRef = this.dialog.open(B2FilterByStarsComponent, {
      width: '300px',
      position: {
        top: '120px',
        left: '110px'
      },
      data: {},
      hasBackdrop: true
    });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.routeSubject$))
    .subscribe((result: string[]) => {
      if (result) {
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels', { category: result });
        this.toggleBtnStarsColor = true;
      } else {
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels', { category: null });
        this.toggleBtnStarsColor = false;
      }

    });
  }

  openFilterByTypeDialog(): void {
    const dialogRef = this.dialog.open(B2FilterByTypeComponent, {
      width: '300px',
      position: {
        top: '120px',
        left: '110px'
      },
      data: {},
      hasBackdrop: true
    });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.routeSubject$))
    .subscribe(result => {
      if (result) {
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels', { propertyType: result });
        this.toggleBtnTypeColor = true;
      } else {
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels', { propertyType: null });
        this.toggleBtnTypeColor = false;
      }
    });
  }


  openFilterByPriceDialog(): void {
    const dialogRef = this.dialog.open(B2FilterByPriceComponent, {
      width: '300px',
      // height: '400px',
      position: {
        top: '120px',
        left: '110px'
      },
      data: {},
      hasBackdrop: true
    });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.routeSubject$))
    .subscribe((result: FilterByPrice) => {
      this.filterByMinPrice = !!result && typeof result.minPrice === 'number' ? result.minPrice : null;
      this.filterByMaxPrice = !!result && typeof result.maxPrice === 'number' ? result.maxPrice : null;
      if (this.filterByMinPrice !== null && this.filterByMaxPrice !== null) {
        this.toggleBtnPriceColor = true;
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels',
        {
          minprice: `${this.filterByMinPrice}`,
          maxprice: `${this.filterByMaxPrice}`
        });
      } else {
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels',
          {
            minprice: null,
            maxprice: null
          });
        this.toggleBtnPriceColor = false;
      }
    });
  }

  openAllFiltersDialog(): void {
    const dialogRef = this.dialog.open(B2FiltersAllDialogComponent, {
      width: '300px',
      data: {},
      hasBackdrop: true
    });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.routeSubject$))
    .subscribe(result => {
      if (!!result) {
        const setFilterParams: QueryParameters = {};
        if (result.selectedCountry) {
          setFilterParams.location = result.selectedCountry;
        } else {
          setFilterParams.location = null;
        }
        if (result.selectedPriceRange && typeof result.selectedPriceRange.minPrice === 'number') {
          setFilterParams.minprice = `${result.selectedPriceRange.minPrice}`;
        } else {
          setFilterParams.minprice = null;
        }
        if (result.selectedPriceRange && typeof result.selectedPriceRange.maxPrice === 'number') {
          setFilterParams.maxprice = `${result.selectedPriceRange.maxPrice}`;
        } else {
          setFilterParams.maxprice = null;
        }
        if (result.selectedCategories.length) {
          setFilterParams.category = result.selectedCategories;
        } else {
          setFilterParams.category = null;
        }
        if (result.selectedPropertyTypes.length) {
          setFilterParams.propertyType = result.selectedPropertyTypes;
        } else {
          setFilterParams.propertyType = null;
        }
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels', setFilterParams);
      } else {
        this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels',
          {
            location: null,
            minprice: null,
            maxprice: null,
            category: null,
            propertyType: null
          });
      }

    });
  }
}
