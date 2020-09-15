import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models';
import { Angular2TokenService, USER_SIGNED_INFO } from '../services/angular2-token.service';
import { SERVER_URL } from '../common';
declare var chrome: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errorMessage: string = "";
  public is_signingin: boolean = false;
  public model: any = [];
  public is_error_email: boolean = false;
  public is_error_password: boolean = false;
  public SERVER_URL = SERVER_URL;
  constructor(
      private router: Router,
      public authService: Angular2TokenService,
  	) { }

  ngOnInit() {
  }

  signin(loginForm){

    this.is_signingin = true;

    //codes for validation
    if(this.model.email == "" || this.model.email == undefined) {
      this.is_error_email = true;
    } else {
      this.is_error_email = false;
    }
    
    if(this.model.password == "" || this.model.password == undefined) {
      this.is_error_password = true;
    } else {
      this.is_error_password = false;
    }

    if(!this.is_error_password && !this.is_error_email) {
      this.authService.signIn(this.model.email, this.model.password)
       .subscribe(result => {
        this.errorMessage = "";
        this.is_signingin = false;
        this.router.navigate(['']);

        this.is_error_email = false;
        this.is_error_password = false;

       },error => {
          this.is_error_email = true;
          this.is_error_password = true;
         this.is_signingin = false;
       });
    }
  }
  
  hideSideBar(){
    // this.appState.set('isAtmosphereShown', false);
    chrome.runtime.sendMessage({type: "exitExtension"});
  }
}
