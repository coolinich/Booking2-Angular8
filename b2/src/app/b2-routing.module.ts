import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B2ViewAllHotelsComponent } from './components/pages/b2-view-all-hotels/b2-view-all-hotels.component';
import { B2SigninFormComponent } from './components/b2-signin-form/b2-signin-form.component';
import { B2DetailsPageComponent } from './components/pages/details-page/b2-details-page/b2-details-page.component';
import { B2PageNotFoundComponent } from './components/pages/b2-page-not-found/b2-page-not-found.component';
import { B2AddHotelPageComponent } from './admin/add-hotel-page/add-hotel-page.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminComponent } from './admin/admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'all-hotels',
    pathMatch: 'full'
  },
  {
    path: 'all-hotels',
    component: B2ViewAllHotelsComponent,
  },
  { path: 'admin', component: AdminComponent},
  { path: 'all-hotels/:id', component: B2DetailsPageComponent },
  { path: '**', component: B2PageNotFoundComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class B2RoutingModule { }
