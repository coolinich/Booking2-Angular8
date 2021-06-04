import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelFacilities } from 'src/app/interfaces/hotel-facilities';
import { ALL_FACILITIES, ALL_PROPERTIES_TYPES } from 'src/mock-allhotels';
import { HelpersService } from 'src/app/services/helpers.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'b2-hotel-form',
  templateUrl: './b2-hotel-form.component.html',
  styleUrls: ['./b2-hotel-form.component.css']
})
export class B2HotelFormComponent implements OnInit {
  @Input() ifEditMode: boolean;
  @Input() hotel: Hotel;
  allFacilities = ALL_FACILITIES;
  facilitiesToSubmit: HotelFacilities = {};

  constructor(
    private hotelsDataService: HotelsDataService,
    private helpersService: HelpersService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  propertyTypes = this.hotelsDataService.getAvailablePropertiesTypes();

  addHotelForm = this.fb.group({
    title: [''],
    shortDescription: [''],
    fullDescription: [''],
    type: [''],
    img: [''],
    location: [''],
    address: [''],
    category: [''],
    price: [''],
    facilities: ['']
  });

  ngOnInit() {
    if (Object.keys(this.hotel).length > 0 && this.ifEditMode) {
      this.addHotelForm.controls.title.setValue(this.hotel.title);
      this.addHotelForm.controls.shortDescription.setValue(this.hotel.shortDescription);
      this.addHotelForm.controls.fullDescription.setValue(this.hotel.fullDescription);
      this.addHotelForm.controls.type.setValue(this.hotel.type);
      this.addHotelForm.controls.img.setValue(this.hotel.img);
      this.addHotelForm.controls.location.setValue(this.hotel.location);
      this.addHotelForm.controls.address.setValue(this.hotel.address);
      this.addHotelForm.controls.category.setValue(this.hotel.category);
      this.addHotelForm.controls.price.setValue(this.hotel.price);
    }

  }

  onSubmit() {
    const dataToSubmit: Hotel = Object.assign({}, this.addHotelForm.value);
    delete dataToSubmit.facilities;
    dataToSubmit.facilities = Object.assign({}, this.prepareDataToSubmit());

    if (this.ifEditMode) {
      dataToSubmit.id = this.hotel.id;
      this.hotelsDataService.editHotel(dataToSubmit).subscribe(resp => {
        this.messageService.add({
          severity: 'success',
          summary: 'Edit property',
          detail: `Property ${resp.title} was successfuly updated!`,
          life: 3000
        });
        this.router.navigate(['/admin/select-to-edit']);
      });
      this.router.navigate(['/admin/select-to-edit']);
    } else {
      dataToSubmit.id = this.helpersService.generateRandomAlphaNumeric(8);
      this.hotelsDataService.addHotel(dataToSubmit).subscribe(
        resp => {
        if (Object.keys(resp).length) {
          this.messageService.add({
            severity: 'success',
            summary: 'Add new property',
            detail: `New property ${resp.title} was successfuly added!`,
            life: 3000
          });
          this.router.navigate(['/admin/select-to-edit']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `New property wasn't added!`,
            life: 3000
          });
          }
        }
      );
    }
  }

  get facilities() {
    return this.addHotelForm.get('facilities') as FormArray;
  }

  prepareDataToSubmit() {
    return this.helpersService.convertArrayOfBooleansToObject(this.allFacilities, this.addHotelForm.value.facilities.facilitiesArray);
  }
}
