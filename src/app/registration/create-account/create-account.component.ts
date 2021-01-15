import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthenticationService} from "../../shared/authentication.service";
import {Router} from "@angular/router";
import { Customer } from './Customer';
import { UserFiles } from './UserFiles';
import { UserDetails } from 'src/UserDetails';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.createAccountForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'role': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });

    //create an employee or customer to match to the user

  }

  createAccount(form: FormGroup) {
    debugger;
    if (form.value.username && form.value.role && form.value.password) {
      const username: string = <string>form.value.username;
      const role: string = <string>form.value.role;
      const password: string = <string>form.value.password;
      var userDetails: UserDetails = new UserDetails();
      this.authService.register(username, role, password).subscribe(
        (data) => {
          console.log();
          if ( form.value.role === 'CUSTOMER'){
            var userFiles = new UserFiles();
            var customer = new Customer(null, null, form.value.username, userFiles);
            var newCustomer = this.authService.createCustomer(customer, 'token');
            console.log(newCustomer);
        } else if (form.value.role === "EMPLOYEE"){
            //create an employee object to match the user
      }
          form.reset();
          return this.router.navigate([`/`]
        )},error=>
          console.log(error)
        );
    }
  }
}