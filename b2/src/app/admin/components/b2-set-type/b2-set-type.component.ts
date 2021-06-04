import { Component, OnInit, forwardRef } from '@angular/core';
import { FormBuilder, AbstractControl, ValidationErrors, FormControl, ReactiveFormsModule, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { ALL_PROPERTIES_TYPES } from 'src/mock-allhotels';
import { Observable } from 'rxjs';
import { HotelsDataService } from 'src/app/services/hotels-data.service';

@Component({
  selector: 'b2-set-type',
  templateUrl: './b2-set-type.component.html',
  styleUrls: ['./b2-set-type.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SetTypeComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SetTypeComponent),
      multi: true
    }
  ]
})
export class B2SetTypeComponent implements OnInit {
  availablePropertiesTypes$: Observable<string[]>;

  availablePropertiesTypes = this.fb.control('');

  constructor(
    private fb: FormBuilder,
    private hotelsDataService: HotelsDataService
  ) { }

  ngOnInit() {
    this.availablePropertiesTypes$ = this.hotelsDataService.getAvailablePropertiesTypes();
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.availablePropertiesTypes.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.availablePropertiesTypes.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.availablePropertiesTypes.disable() : this.availablePropertiesTypes.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.availablePropertiesTypes.valid ? null : { invalidForm: {valid: false, message: 'Select property type fields are invalid'}};
  }

}
