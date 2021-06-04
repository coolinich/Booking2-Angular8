import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { GetAllDataInterceptor } from './get-all-data-interceptor';
import { BookHotelInterceptor } from './book-hotel-interceptor';
import { SigninInterceptor } from './signin-interceptor';
import { AddPropertyInterceptor } from './add-property-interceptor';
import { EditPropertyInterceptor } from './edit-property-interceptor';
import { AuthInterceptor } from './auth-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: GetAllDataInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: BookHotelInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: SigninInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AddPropertyInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: EditPropertyInterceptor, multi: true  }
];
