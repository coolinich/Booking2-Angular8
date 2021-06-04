import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ALL_HOTELS } from 'src/mock-allhotels';
import { Router } from '@angular/router';

@Component({
  selector: 'b2-table',
  templateUrl: './b2-table.component.html',
  styleUrls: ['./b2-table.component.css']
})
export class B2TableComponent implements OnInit {
  @Input() listOfHotels: Hotel[];
  displayedColumns: string[] = ['title', 'location'];
  // how to define it properly?
  dataSource: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.listOfHotels);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editSelected($event) {
    this.router.navigate([`all-hotels/${$event.target.closest('td').getAttribute('id')}/edit-hotel`]);
  }
}
