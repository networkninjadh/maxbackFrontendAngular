import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../../UserCredentials';
import { AuthenticationService } from '../../authentication.service';
import { UserDetails } from 'src/UserDetails';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [AuthenticationService]
})

export class SignInComponent implements OnInit {
  
  private userCredentials:UserCredentials;
  private token:string;
  private userDetails:UserDetails;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {}
  
  getUserToken() {
    let username = (<HTMLInputElement>document.getElementById('username')).value;
    let role = "CUSTOMER";
    let password = (<HTMLInputElement>document.getElementById('pass')).value;
    let userCredentials = new UserCredentials(password, username, role);

    this.authenticationService.loginUser(userCredentials).then(
      token => {
        this.token = token;
      },
      err => {
        console.log(err);
      }
      
    );
    alert(this.token);
  }

  registerUser() {
    let username = (<HTMLInputElement>document.getElementById('username')).value;
    let role = "CUSTOMER";
    let password = (<HTMLInputElement>document.getElementById('pass')).value;
    let userCredentials = new UserCredentials(password, username, role);
    this.authenticationService.registerUser(userCredentials).then(
      userDetails => {
        this.userDetails = userDetails;
        
      },
      err => {
        console.log(err);
      }
    );
  }
}