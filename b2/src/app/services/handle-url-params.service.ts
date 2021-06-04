import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QueryParameters } from "../interfaces/query-parameters";

@Injectable({
  providedIn: 'root'
})
export class HandleUrlParamsService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  changeParamToUrlAndNavigate(url: string, newParams: QueryParameters) {
    this.router.navigate([url],
    {
      queryParams: newParams,
      queryParamsHandling: 'merge'
    });
  }

}
