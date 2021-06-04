import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';

import { B2AddHotelPageComponent } from './add-hotel-page/add-hotel-page.component';
import { B2EditHotelPageComponent } from './edit-hotel-page/edit-hotel-page.component';
import { B2TableComponent } from './components/b2-table/b2-table.component';
import { B2SetCategoryComponent } from './components/b2-set-category/b2-set-category.component';
import { B2SetLocationComponent } from './components/b2-set-location/b2-set-location.component';
import { B2SetTypeComponent } from './components/b2-set-type/b2-set-type.component';
import { B2SetFacilitiesComponent } from './components/b2-set-facilities/b2-set-facilities.component';
import { B2HotelFormComponent } from './components/b2-hotel-form/b2-hotel-form.component';
import { B2AllHotelsToEditPageComponent } from './b2-all-hotels-to-edit-page/b2-all-hotels-to-edit-page.component';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AdminComponent,
    B2AddHotelPageComponent,
    B2EditHotelPageComponent,
    B2TableComponent,
    B2SetCategoryComponent,
    B2SetLocationComponent,
    B2SetTypeComponent,
    B2SetFacilitiesComponent,
    B2HotelFormComponent,
    B2AllHotelsToEditPageComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
})
export class AdminModule { }
