import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';


@Component({
  selector: 'b2-set-location',
  templateUrl: './b2-set-location.component.html',
  styleUrls: ['./b2-set-location.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SetLocationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SetLocationComponent),
      multi: true
    }
  ]
})
export class B2SetLocationComponent implements OnInit {
  locationName = this.fb.control('');
  countries$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    this.countries$ = this.countriesService.getCountries();
  }

  public onTouched: () => void = () => {};


  writeValue(val: any): void {
    if (val) {
      this.locationName.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.locationName.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.locationName.disable() : this.locationName.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.locationName.valid ? null : { invalidForm: {valid: false, message: 'Select location type fields are invalid'}};
  }

}
