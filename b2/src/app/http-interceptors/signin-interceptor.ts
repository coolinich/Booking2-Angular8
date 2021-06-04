import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SigninRequest, SigninResponse } from '../interfaces/signin-request';
import { ADMIN } from 'src/environments/environment';

@Injectable()
export class SigninInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<SigninRequest>, next: HttpHandler): Observable<HttpEvent<SigninResponse>> {
   if (req.url.indexOf('/login') > -1) {
      if (req.body.username === ADMIN.username && req.body.userpsw === ADMIN.userpsw) {
        return of(new HttpResponse(
          { status: 200, body: {token: 'somerandomtoken'}}
        ));
      } else {
        return of(new HttpResponse(
          { status: 401, body: {
            errorCode: 401,
            errorMessage: 'Bad credentials!'
          }}
        ));
      }
    } else {
      return next.handle(req);
    }
  }
}
