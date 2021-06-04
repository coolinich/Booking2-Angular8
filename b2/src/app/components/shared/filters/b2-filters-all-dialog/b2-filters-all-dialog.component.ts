import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FilterByPrice } from 'src/app/interfaces/filter-by-price';
import { HotelsDataService } from 'src/app/services/hotels-data.service';

@Component({
  selector: 'b2-filters-all-dialog',
  templateUrl: './b2-filters-all-dialog.component.html',
  styleUrls: ['./b2-filters-all-dialog.component.css']
})
export class B2FiltersAllDialogComponent implements OnInit, OnDestroy {
  routeSubject$ = new Subject();
  priceRangeFilterValues: FilterByPrice = {
    minPrice: 0,
    maxPrice: 30000
  };
  initialSelectedCategories = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  };
  availablePropertiesTypes: string[];
  selectedPropertyTypesData: {
    label: string,
    state: boolean
  }[] = [];

  hotelCategory: number;
  allFiltersForm = this.fb.group({
    selectedCountry: [''],
    selectedPriceRange: [this.priceRangeFilterValues],
    selectedPropertyTypes: [this.selectedPropertyTypesData],
    selectedCategories: [this.initialSelectedCategories]
  });

  constructor(
    public dialogRef: MatDialogRef<B2FiltersAllDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private hotelsDataService: HotelsDataService
  ) { }

  ngOnInit() {
    this.hotelsDataService.getAvailablePropertiesTypes()
    .pipe(takeUntil(this.routeSubject$))
    .subscribe((data: string[]) => this.availablePropertiesTypes = [...data]);

    this.route.queryParams
    .pipe(takeUntil(this.routeSubject$))
    .subscribe(params => {
      if (params.location) {
        this.selectedCountry.setValue(params.location);
      }
      if (params.minprice && params.maxprice) {
        this.priceRangeFilterValues.minPrice = +params.minprice;
        this.priceRangeFilterValues.maxPrice = +params.maxprice;
      } else {
        this.priceRangeFilterValues.minPrice = 0;
        this.priceRangeFilterValues.maxPrice = 30000;
      }
      if (params.category) {
        Object.keys(this.initialSelectedCategories).map((cat, index) => {
          if (params.category.includes((index + 1).toString())) {
            this.initialSelectedCategories[index + 1] = true;
          } else {
            this.initialSelectedCategories[index + 1] = false;
          }
        });
      }
      if (params.propertyType) {
        for (const prop of this.availablePropertiesTypes.filter(el => params.propertyType.includes(el))) {
            this.selectedPropertyTypesData.push({
              label: prop,
              state: true
            });
        }
        for (const prop of this.availablePropertiesTypes.filter(el => !params.propertyType.includes(el))) {
            this.selectedPropertyTypesData.push({
              label: prop,
              state: false
            });
          }
      } else {
        for (const prop of this.availablePropertiesTypes) {
          this.selectedPropertyTypesData.push({
            label: prop,
            state: false
          });
        }
      }
    });
  }

  ngOnDestroy() {
    this.routeSubject$.next();
  }

  onCancelClick(): void {
    this.allFiltersForm.reset();
    this.dialogRef.close(null);
  }

  onSubmit() {
    const dataToBeSent = Object.assign({}, this.allFiltersForm.value);
    if (!!this.selectedCategories.value) {
      const res = this.selectedCategories.value;
      delete dataToBeSent.selectedCategories;
      dataToBeSent.selectedCategories = Object.keys(this.selectedCategories.value).filter(num => res[num] === true);
    }
    if (!!this.selectedPropertyTypes.value) {
      const selectedProperties = dataToBeSent.selectedPropertyTypes.propertiesArray || dataToBeSent.selectedPropertyTypes;
      dataToBeSent.selectedPropertyTypes = selectedProperties
      .filter((item: {label: string, state: boolean}) => item.state === true)
      .map((item: any)  => item = item.label);
    }
    this.dialogRef.close(dataToBeSent);
  }

  get selectedCountry() {
    return this.allFiltersForm.get('selectedCountry') as FormControl;
  }

  get selectedCategories() {
    return this.allFiltersForm.get('selectedCategories') as FormControl;
  }

  get selectedPropertyTypes() {
    return this.allFiltersForm.get('selectedPropertyTypes') as FormArray;
  }
}
