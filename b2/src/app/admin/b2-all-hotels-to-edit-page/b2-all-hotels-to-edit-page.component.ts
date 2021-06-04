import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelsDataService } from 'src/app/services/hotels-data.service';

@Component({
  selector: 'b2-all-hotels-to-edit-page',
  templateUrl: './b2-all-hotels-to-edit-page.component.html',
  styleUrls: ['./b2-all-hotels-to-edit-page.component.css']
})
export class B2AllHotelsToEditPageComponent implements OnInit {
  listOfHotels: Hotel[];
  constructor(
    private hotelsDataService: HotelsDataService
  ) { }

  ngOnInit() {
    this.hotelsDataService.getAllHotelsData().subscribe((data: Hotel[]) => this.listOfHotels = data);
  }

}
