import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { Hotel } from 'src/app/interfaces/hotel';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { B2HotelBookFormComponent } from '../b2-hotel-book-form/b2-hotel-book-form.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'b2-details-page',
  templateUrl: './b2-details-page.component.html',
  styleUrls: ['./b2-details-page.component.css']
})
export class B2DetailsPageComponent implements OnInit, OnDestroy {
  hotel$: Observable<Hotel>;
  urlParams: ParamMap;

  private readonly bookSubject$ = new Subject();

  constructor(
    private hotelsData: HotelsDataService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.hotel$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.urlParams = params;
        return this.hotelsData.getHotelDetails(params.get('id'));
      }
      ));
  }

  ngOnDestroy() {
    this.bookSubject$.next();
  }

  openBookDialog() {
    const dialogRef = this.dialog.open(B2HotelBookFormComponent, {
      width: '300px',
      data: { hotelId: this.urlParams.get('id') },
      hasBackdrop: true
    });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.bookSubject$))
    .subscribe(result => {
     if (result) {
        this.messageService.add(
          {
            severity: 'success',
            summary: 'Booking request',
            detail: 'Your booking is successful, thanks!',
            life: 5000
          });
      }
    });
  }

}
