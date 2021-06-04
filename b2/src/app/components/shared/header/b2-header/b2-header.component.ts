import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Observable, of } from 'rxjs';
import { B2SigninFormComponent } from 'src/app/components/b2-signin-form/b2-signin-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'b2-header',
  templateUrl: './b2-header.component.html',
  styleUrls: ['./b2-header.component.css']
})
export class B2HeaderComponent {
  @Input() ifSignedIn: boolean;
  constructor(
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  signIn(): void {
    const dialogRef = this.dialog.open(B2SigninFormComponent, {
      width: '300px',
      data: {},
      hasBackdrop: true
    });
  }

  signOut(): void {
    this.authService.signout();
  }
}
