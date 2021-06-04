import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-b2-filter-by-location',
  templateUrl: './b2-filter-by-location.component.html',
  styleUrls: ['./b2-filter-by-location.component.css']
})
export class B2FilterByLocationComponent implements OnInit, OnDestroy {
  locationFilterForm = this.fb.control('');
  private readonly routeSubject$ = new Subject();

  constructor(
    public dialogRef: MatDialogRef<B2FilterByLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
    .pipe(takeUntil(this.routeSubject$))
    .subscribe(params => {
      if (params.location) {
        this.locationFilterForm.setValue(params.location);
      }
    });
  }

  ngOnDestroy() {
    this.routeSubject$.next();
  }

  onSubmit() {
    this.dialogRef.close(this.locationFilterForm.value);
  }

  onCancelClick(): void {
    this.locationFilterForm.reset();
    this.dialogRef.close();
  }
}
