import { Component, OnInit, Input, Inject, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilterByPrice } from "src/app/interfaces/filter-by-price";
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'b2-filter-by-price',
  templateUrl: './b2-filter-by-price.component.html',
  styleUrls: ['./b2-filter-by-price.component.css']
})
export class B2FilterByPriceComponent implements OnInit, OnDestroy {
  priceRangeFilterValues: FilterByPrice = {
    minPrice: 0,
    maxPrice: 30000
  };

  priceRangeFilterForm = this.fb.control(this.priceRangeFilterValues);
  private readonly routeSubject$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<B2FilterByPriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.route.queryParams
    .pipe(takeUntil(this.routeSubject$))
    .subscribe(params => {
      if (params.minprice && params.maxprice) {
        this.priceRangeFilterValues.minPrice = +params.minprice;
        this.priceRangeFilterValues.maxPrice = +params.maxprice;
      } else {
        this.priceRangeFilterValues.minPrice = 0;
        this.priceRangeFilterValues.maxPrice = 30000;
      }
    });
  }

  ngOnDestroy() {
    this.routeSubject$.next();
  }

  onSubmit() {
    this.priceRangeFilterValues = Object.assign({}, this.priceRangeFilterForm.value);
    this.dialogRef.close(this.priceRangeFilterValues);
  }

  onCancelClick(): void {
    this.priceRangeFilterForm.reset();
    this.dialogRef.close(null);
  }
}
