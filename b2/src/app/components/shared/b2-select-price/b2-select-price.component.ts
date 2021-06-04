import { Component, OnInit, forwardRef, Input } from '@angular/core';
import {
  FormBuilder, FormGroup,
  NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, AbstractControl,
  ValidationErrors, Validators, FormControl } from '@angular/forms';
import { FilterByPrice } from 'src/app/interfaces/filter-by-price';

@Component({
  selector: 'b2-select-price',
  templateUrl: './b2-select-price.component.html',
  styleUrls: ['./b2-select-price.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SelectPriceComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SelectPriceComponent),
      multi: true
    }
  ]
})
export class B2SelectPriceComponent implements OnInit, ControlValueAccessor {
  @Input() priceRange: FilterByPrice;
  public priceRangeGroup: FormGroup = this.fb.group({
    minPrice: [0, Validators.required],
    maxPrice: [30000, Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  public onTouched: () => void = () => {};

  writeValue(val?: FilterByPrice): void {
    if (val) {
      this.priceRangeGroup.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.priceRangeGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.priceRangeGroup.disable() : this.priceRangeGroup.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.priceRangeGroup.valid ? null : { invalidForm: {valid: false, message: 'Price Range fields are invalid'}};
  }

}
