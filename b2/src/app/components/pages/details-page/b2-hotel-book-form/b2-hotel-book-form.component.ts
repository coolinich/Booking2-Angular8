import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { ActivatedRoute } from '@angular/router';
import { BookingRequest } from 'src/app/interfaces/booking-request';

@Component({
  selector: 'b2-hotel-book-form',
  templateUrl: './b2-hotel-book-form.component.html',
  styleUrls: ['./b2-hotel-book-form.component.css']
})
export class B2HotelBookFormComponent implements OnInit {
  bookHotelForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<B2HotelBookFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private hotelsDataService: HotelsDataService
  ) { }

  ngOnInit() {
    this.bookHotelForm = this.fb.group({
      datesRange: [''],
      userFirstName: ['', Validators.required],
      userSecondName: ['', Validators.required]
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.hotelsDataService.bookHotel(this.prepareBookingRequest())
      .subscribe(resp =>
        this.dialogRef.close(resp)
      );
  }

  prepareBookingRequest(): BookingRequest {
    return {
      hotelId: this.data.hotelId,
      startDate: this.bookHotelForm.value.datesRange.startDate,
      endDate: this.bookHotelForm.value.datesRange.endDate,
      firstName: this.bookHotelForm.value.userFirstName,
      secondName: this.bookHotelForm.value.userSecondName
    };
  }

}
