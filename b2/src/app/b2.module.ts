import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { httpInterceptorProviders } from './http-interceptors';

import { AdminModule } from './admin/admin.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { B2RoutingModule } from './b2-routing.module';
import { B2Component } from './b2.component';
import { B2HeaderComponent } from './components/shared/header/b2-header/b2-header.component';
import { B2CardsListComponent } from './components/shared/cards/b2-cards-list/b2-cards-list.component';
import { B2CardComponent } from './components/shared/cards/b2-card/b2-card.component';
import { B2FiltersListComponent } from './components/b2-filters-list/b2-filters-list.component';
import { B2FilterByStarsComponent } from './components/shared/filters/b2-filter-by-stars/b2-filter-by-stars.component';
import { B2FilterByTypeComponent } from './components/shared/filters/b2-filter-by-type/b2-filter-by-type.component';
import { B2FilterByLocationComponent } from './components/shared/filters/b2-filter-by-location/b2-filter-by-location.component';
import { B2PageNotFoundComponent } from './components/pages/b2-page-not-found/b2-page-not-found.component';
import { B2SigninFormComponent } from './components/b2-signin-form/b2-signin-form.component';
import { B2DetailsPageComponent } from './components/pages/details-page/b2-details-page/b2-details-page.component';
import { B2ViewAllHotelsComponent } from './components/pages/b2-view-all-hotels/b2-view-all-hotels.component';
import { B2HotelDetailsFacilitiesComponent } from './components/pages/details-page/b2-hotel-details-facilities/b2-hotel-details-facilities.component';
import { B2HotelDetailsCategoryComponent } from './components/pages/details-page/b2-hotel-details-category/b2-hotel-details-category.component';
import { B2FiltersAllDialogComponent } from './components/shared/filters/b2-filters-all-dialog/b2-filters-all-dialog.component';
import { B2SelectCategoryComponent } from './components/shared/b2-select-category/b2-select-category.component';
import { B2SelectPriceComponent } from './components/shared/b2-select-price/b2-select-price.component';
import { B2SelectTypeComponent } from './components/shared/b2-select-type/b2-select-type.component';
import { B2SelectLocationComponent } from './components/shared/b2-select-location/b2-select-location.component';
import { B2FilterByPriceComponent } from './components/shared/filters/b2-filter-by-price/b2-filter-by-price.component';
import { B2HotelDetailsBackToCatalogComponent } from './components/pages/details-page/b2-hotel-details-back-to-catalog/b2-hotel-details-back-to-catalog.component';
import { B2ShowLocationComponent } from './components/shared/b2-show-location/b2-show-location.component';
import { B2ShowTypeComponent } from './components/shared/b2-show-type/b2-show-type.component';
import { B2SelectDatesRangeComponent } from './components/shared/b2-select-dates-range/b2-select-dates-range.component';
import { B2HotelBookFormComponent } from './components/pages/details-page/b2-hotel-book-form/b2-hotel-book-form.component';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConvertToArrayOfSizePipe } from './pipes/convert-to-array-of-size.pipe';
import { B2PaginationComponent } from './components/shared/b2-pagination/b2-pagination.component';

@NgModule({
  declarations: [
    B2Component,
    B2HeaderComponent,
    B2CardsListComponent,
    B2CardComponent,
    B2FiltersListComponent,
    B2FilterByStarsComponent,
    B2FilterByTypeComponent,
    B2FilterByLocationComponent,
    B2DetailsPageComponent,
    B2SigninFormComponent,
    B2PageNotFoundComponent,
    B2ViewAllHotelsComponent,
    B2HotelDetailsFacilitiesComponent,
    B2HotelDetailsCategoryComponent,
    B2FiltersAllDialogComponent,
    B2SelectCategoryComponent,
    B2SelectPriceComponent,
    B2SelectTypeComponent,
    B2SelectLocationComponent,
    B2FilterByPriceComponent,
    B2HotelDetailsBackToCatalogComponent,
    B2ShowLocationComponent,
    B2ShowTypeComponent,
    B2SelectDatesRangeComponent,
    B2HotelBookFormComponent,
    ConvertToArrayOfSizePipe,
    B2PaginationComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatTableModule,
    NgbModule,
    AdminModule,
    B2RoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [
    MessageService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} },
    httpInterceptorProviders
  ],
  entryComponents: [
    B2FilterByLocationComponent,
    B2FilterByStarsComponent,
    B2FilterByTypeComponent,
    B2FilterByPriceComponent,
    B2FiltersAllDialogComponent,
    B2SigninFormComponent,
    B2HotelBookFormComponent
  ],
  bootstrap: [B2Component]
})
export class B2Module { }
