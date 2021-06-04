import { Component, forwardRef } from '@angular/core';
import { FormBuilder, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormArray } from '@angular/forms';
import { MAX_CATEGORY } from 'src/mock-allhotels';

@Component({
  selector: 'b2-select-category',
  templateUrl: './b2-select-category.component.html',
  styleUrls: ['./b2-select-category.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SelectCategoryComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SelectCategoryComponent),
      multi: true
    }
  ]
})
export class B2SelectCategoryComponent {
  maxCategory = MAX_CATEGORY;
  tmpTemplateArr: any[];

  categoriesGroup = this.fb.group({
    1: this.fb.control(false),
    2: this.fb.control(false),
    3: this.fb.control(false),
    4: this.fb.control(false),
    5: this.fb.control(false)
  });


  constructor(
    private fb: FormBuilder,
  ) {}

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.categoriesGroup.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.categoriesGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.categoriesGroup.disable() : this.categoriesGroup.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.categoriesGroup.valid ? null : { invalidForm: {valid: false, message: 'Select category fields are invalid'}};
  }
}
