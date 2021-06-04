import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { MAX_CATEGORY } from 'src/mock-allhotels';

@Component({
  selector: 'b2-set-category',
  templateUrl: './b2-set-category.component.html',
  styleUrls: ['./b2-set-category.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SetCategoryComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SetCategoryComponent),
      multi: true
    }
  ]
})
export class B2SetCategoryComponent implements OnInit {
  maxCategory = MAX_CATEGORY;
  category = this.fb.control('1');
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.category.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.category.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.category.disable() : this.category.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.category.valid ? null : { invalidForm: {valid: false, message: 'Set category field is invalid'}};
  }
}
