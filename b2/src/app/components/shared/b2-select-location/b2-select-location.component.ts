import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'b2-select-location',
  templateUrl: './b2-select-location.component.html',
  styleUrls: ['./b2-select-location.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SelectLocationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SelectLocationComponent),
      multi: true
    }
  ]
})
export class B2SelectLocationComponent implements OnInit {
  public locationName: FormControl = this.fb.control('');
  countries$: Observable<any>;

  constructor(
    private countriesService: CountriesService,
    private fb: FormBuilder
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
    if (isDisabled) {
      this.locationName.disable();
    } else {
      this.locationName.enable();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.locationName.valid ? null : { invalidForm: {valid: false, message: 'Location fields are invalid'}};
  }

}
