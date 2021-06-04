import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelpersService } from 'src/app/services/helpers.service';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'b2-filter-by-type',
  templateUrl: './b2-filter-by-type.component.html',
  styleUrls: ['./b2-filter-by-type.component.css']
})
export class B2FilterByTypeComponent implements OnInit, OnDestroy {
  availablePropertiesTypes: string[];
  selectedPropertyTypesData: {
    label: string,
    state: boolean
  }[] = [];

  typesFilterForm = this.fb.group({
    selectedPropertyTypes: [this.selectedPropertyTypesData]
  });

  private readonly hds$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private hotelsDataService: HotelsDataService,
    public dialogRef: MatDialogRef<B2FilterByTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit() {
    this.hotelsDataService.getAvailablePropertiesTypes()
    .pipe(takeUntil(this.hds$))
    .subscribe((data: string[]) => this.availablePropertiesTypes = [...data]);

    this.route.queryParams
    .pipe(takeUntil(this.hds$))
    .subscribe(params => {

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
    this.hds$.next();
  }


  onSubmit() {
    const formValue = this.selectedPropertyTypes.value.propertiesArray || this.selectedPropertyTypes.value;
    if (formValue) {
      this.selectedPropertyTypesData = [];
      this.typesFilterForm.reset();
      this.dialogRef.close(
        formValue
        .filter((item: {label: string, state: boolean}) => item.state === true)
        .map((item: any)  => item = item.label));
    } else {
      this.dialogRef.close(null);
    }

  }

  onCancelClick(): void {
    this.typesFilterForm.reset();
    this.selectedPropertyTypesData = [];
    this.dialogRef.close();
  }

  get selectedPropertyTypes() {
    return this.typesFilterForm.get('selectedPropertyTypes') as FormArray;
  }
}
