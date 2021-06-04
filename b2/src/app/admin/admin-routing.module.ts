import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B2AddHotelPageComponent } from './add-hotel-page/add-hotel-page.component';
import { AuthGuard } from '../guard/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { B2EditHotelPageComponent } from './edit-hotel-page/edit-hotel-page.component';
import { B2AllHotelsToEditPageComponent } from './b2-all-hotels-to-edit-page/b2-all-hotels-to-edit-page.component';


const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    // redirectTo: '/all-hotels',
    // pathMatch: 'full'
    component: AdminComponent,
    children: [
      {
        path: 'select-to-edit',
        component: B2AllHotelsToEditPageComponent
      },
      {
        path: 'add',
        component: B2AddHotelPageComponent
      }
    ]
  },
  {
    path: 'all-hotels/:id/edit-hotel',
    canActivate: [AuthGuard],
    component: B2EditHotelPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
