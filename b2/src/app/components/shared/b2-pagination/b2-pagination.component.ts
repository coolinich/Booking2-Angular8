import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HandleUrlParamsService } from 'src/app/services/handle-url-params.service';
import { QueryParameters } from 'src/app/interfaces/query-parameters';
import { HttpParams } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { HotelsDataService } from 'src/app/services/hotels-data.service';
import { Subject, Observable } from 'rxjs';
import { Hotel } from 'src/app/interfaces/hotel';

@Component({
  selector: 'b2-pagination',
  templateUrl: './b2-pagination.component.html',
  styleUrls: ['./b2-pagination.component.css']
})
export class B2PaginationComponent {
  appliedFiltersParamsNotPaged: HttpParams;

  allHotelsNotPaged$: Observable<Hotel[]>;

  private readonly routeSubject$ = new Subject();

  @Input() pageSize: number;
  @Input() collectionSize: number;
  @Input() page: number;

  constructor(
    private handleUrlParamsService: HandleUrlParamsService
  ) {
  }

  onPageChanged(pageNumber: number) {
    this.page = pageNumber;
    this.handleUrlParamsService.changeParamToUrlAndNavigate('all-hotels',
    {
      pageSize: this.pageSize,
      page: this.page
    });
  }
}
