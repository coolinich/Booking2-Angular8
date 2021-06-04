import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ADMIN, API_URL } from 'src/environments/environment';
import { SigninRequest, SigninResponse } from '../interfaces/signin-request';
import { HttpClient } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn = this.isAuth();
  isSignedIn$: Observable<boolean>;
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private handleErrorService: HandleErrorService
  ) { }

  isAuth(): boolean {
    return !!localStorage.getItem('token');
  }

  getAuthToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }

  signin(userCredentials: SigninRequest): Observable<SigninResponse> {
    return this.http.post<SigninRequest>(`${API_URL}/login`, userCredentials)
      .pipe(
        catchError(this.handleErrorService.handleError('Failed to login', {}))
      );
  }

  signout(): void {
    this.isSignedIn = false;
    localStorage.removeItem('token');
    this.router.navigateByUrl('all-hotels');
  }
}
