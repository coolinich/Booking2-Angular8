import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'b2-root',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.css']
})
export class B2Component implements OnInit {
  public isSignedIn: boolean;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSignedIn = this.authService.isSignedIn;
      }
    });
  }

}
