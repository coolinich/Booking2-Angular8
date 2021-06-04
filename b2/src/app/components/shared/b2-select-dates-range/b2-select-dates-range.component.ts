import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
//  import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
//  import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'b2-select-dates-range',
  templateUrl: './b2-select-dates-range.component.html',
  styleUrls: ['./b2-select-dates-range.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SelectDatesRangeComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SelectDatesRangeComponent),
      multi: true
    }
  ]
})
export class B2SelectDatesRangeComponent {
  minDateStart = moment();
  minDateEnd = moment().add(1, 'days');
  err: ValidationErrors;

  public datesRange = this.fb.group({
    startDate: [this.minDateStart, ],
    endDate: [this.minDateEnd]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    console.log(val);
    if (val) {
      this.datesRange.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.datesRange.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.datesRange.disable() : this.datesRange.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    const currentStart = moment(this.datesRange.controls.startDate.value);
    const currentEnd = moment(this.datesRange.controls.endDate.value);
    if (currentEnd.isAfter(currentStart, 'day')) {
      this.err = null;
    } else {
      this.err = {
        invalidForm:
        {
          valid: false,
          message: 'Start date of booking should be before the end date!'
        }
      };
    }
    return this.err;
 }
}
