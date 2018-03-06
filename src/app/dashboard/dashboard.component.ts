import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SecurityService, User } from '../core/security';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  user$: Observable<User | undefined>;

  constructor(private securityService: SecurityService) {
    this.user$ = securityService.user$;
  }

}
