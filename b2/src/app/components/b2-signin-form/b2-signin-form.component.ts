import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninResponse } from 'src/app/interfaces/signin-request';

@Component({
  selector: 'b2-signin-form',
  templateUrl: './b2-signin-form.component.html',
  styleUrls: ['./b2-signin-form.component.css']
})
export class B2SigninFormComponent implements OnInit {
  ifBadCredentials = false;

  signInForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    userPsw: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(
    public dialogRef: MatDialogRef<B2SigninFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.signInForm.reset();
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.signInForm.invalid) {
      return;
    }
    const credentials = {
      username: this.signInForm.value.userName,
      userpsw: this.signInForm.value.userPsw
    };

    this.authService.signin(credentials).subscribe((response: SigninResponse) => {
      if (response.token) {
        localStorage.setItem('token', response.token);
        this.authService.isSignedIn = true;
        this.router.navigateByUrl('admin');
        this.ifBadCredentials = false;
        this.dialogRef.close();
      } else {
        this.signInForm.reset();
        this.ifBadCredentials = true;
      }
    });

  }

  get userName() {
    return this.signInForm.get('userName');
  }

  get userPsw() {
    return this.signInForm.get('userPsw');
  }
}
