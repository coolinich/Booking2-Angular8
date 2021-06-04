import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { HotelFacilities } from 'src/app/interfaces/hotel-facilities';

@Component({
  selector: 'b2-set-facilities',
  templateUrl: './b2-set-facilities.component.html',
  styleUrls: ['./b2-set-facilities.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2SetFacilitiesComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => B2SetFacilitiesComponent),
      multi: true
    }
  ]
})
export class B2SetFacilitiesComponent implements OnInit {
  @Input() availableFacilities: HotelFacilities;
  allAvailableFacilities: string[];
  facilitiesGroup = this.fb.group({
    facilitiesArray: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private hotelsDataService: HotelsDataService
  ) { }

  ngOnInit() {
    console.log('input of facilities', this.availableFacilities);
    this.hotelsDataService.getAvailableFacilities().subscribe((data: string[]) => {
      this.allAvailableFacilities = data;
      if (Object.keys(this.availableFacilities).length > 0) {
        for (const facility of this.allAvailableFacilities) {
          this.availableFacilities[facility] === true ? this.addNewCheckbox(true) : this.addNewCheckbox(false);
        }
      } else {
        for (const facility of this.allAvailableFacilities) {
          this.addNewCheckbox(false);
        }
      }
      console.log('set fac ', this.facilitiesGroup.value);
    });
  }

  get facilitiesArray() {
    return this.facilitiesGroup.get('facilitiesArray') as FormArray;
  }

  addNewCheckbox(val: boolean) {
    this.facilitiesArray.push(this.fb.control(val));
  }

  writeValue(val: any): void {
    val && this.facilitiesGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log('facility on change');
    this.facilitiesGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log('property type on blur');
    //this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.facilitiesGroup.disable() : this.facilitiesGroup.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.facilitiesGroup.valid ? null : { invalidForm: {valid: false, message: 'Select facility fields are invalid'}};
  }

}
