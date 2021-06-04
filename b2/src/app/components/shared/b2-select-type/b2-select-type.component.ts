import { Component, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'b2-select-type',
  templateUrl: './b2-select-type.component.html',
  styleUrls: ['./b2-select-type.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SelectTypeComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SelectTypeComponent),
      multi: true
    }
  ]
})
export class B2SelectTypeComponent {
  availablePropertiesTypes$: Observable<string[]>;

  propertiesGroup = this.fb.group({
    propertiesArray: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val !== null) {
      val.forEach((item: {label: string, state: boolean}) => {
          this.addTypeItem(item.label, item.state);
      });
// Q: should setValue be used here somehow?
// this.propertiesGroup.setValue(val, { emitEvent: false });
    } else {
      // console.log('write failed? ', val);
      // Q: should it be handled somehow?
    }
  }

  registerOnChange(fn: any): void {
    this.propertiesGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.propertiesGroup.disable();
    } else {
      this.propertiesGroup.enable();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.propertiesGroup.valid ? null : { invalidForm: {valid: false, message: 'Select property type fields are invalid'}};
  }

  get propertiesArray(): FormArray {
    return this.propertiesGroup.get('propertiesArray') as FormArray;
  }

  getCheckboxGroup(index: number): FormGroup {
    return this.propertiesArray.controls[index] as FormGroup;
  }

  createTypeItem(label: string = '', state: boolean = false): FormGroup {
    return this.fb.group({
      label,
      state
    });
  }

  addTypeItem(label: string, state: boolean): void {
    this.propertiesArray.push(this.createTypeItem(label, state));
  }

}
