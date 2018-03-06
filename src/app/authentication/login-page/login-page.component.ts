import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../core/security';

@Component({
  selector: 'bm-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private securityService: SecurityService) { }

  googleLogin() {
    this.securityService.googleLogin();
  }

  facebookLogin() {
    this.securityService.facebookLogin();
  }

}
