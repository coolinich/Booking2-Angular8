import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'b2-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listOfHotels: Hotel[];

  tabLinks = [
    {
      path: 'select-to-edit',
      link: 'View all to edit'
    },
    {
      path: 'add',
      link: 'Add new'
    }
  ];
  activeLink = this.tabLinks[0].link;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hotelsDataService: HotelsDataService
  ) { }

  ngOnInit() {
    this.hotelsDataService.getAllHotelsData().subscribe((data: Hotel[]) => this.listOfHotels = data);
    this.router.navigate(['select-to-edit'], { relativeTo: this.route });
  }

}
