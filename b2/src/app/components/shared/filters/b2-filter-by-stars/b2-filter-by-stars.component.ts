import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'b2-filter-by-stars',
  templateUrl: './b2-filter-by-stars.component.html',
  styleUrls: ['./b2-filter-by-stars.component.css']
})
export class B2FilterByStarsComponent implements OnInit, OnDestroy {
  filterByStars: number;
  initialSelectedCategory: number;
  initialSelectedCategories = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  };
  private readonly routeSubject$ = new Subject();

  categoryFilterForm = this.fb.group({
    selectedCategories: [this.initialSelectedCategories]
  });

  constructor(
    public dialogRef: MatDialogRef<B2FilterByStarsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.routeSubject$))
      .subscribe(params => {
        if (params.category) {
          Object.keys(this.initialSelectedCategories).map((cat, index) => {
            if (params.category.includes((index + 1).toString())) {
              this.initialSelectedCategories[index + 1] = true;
            } else {
              this.initialSelectedCategories[index + 1] = false;
            }
          });
        }
      });
  }

  ngOnDestroy() {
    this.routeSubject$.next();
  }

  onCancelClick(): void {
    this.categoryFilterForm.reset();
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.categoryFilterForm.value.selectedCategories) {
      const res = this.selectedCategories.value;
      this.dialogRef.close(
        Object.keys(this.categoryFilterForm.controls.selectedCategories.value).filter(num => res[num] === true)
      );
    } else {
      this.dialogRef.close();
    }
  }

  get selectedCategories() {
    return this.categoryFilterForm.get('selectedCategories') as FormGroup;
  }
}
