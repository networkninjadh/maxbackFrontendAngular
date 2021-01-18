import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../shared/authentication.service";
import { Router } from "@angular/router";

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
      'role'    : new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'email'   : new FormControl(null, Validators.required),
      'address' : new FormControl(null, Validators.required),
      'phone'   : new FormControl(null, Validators.required)
    });
  }

  createAccount(form: FormGroup): void {
    if (form.value.username && form.value.role && form.value.password) {
      const username: string = <string>form.value.username;
      const role: string = <string>form.value.role;
      const password: string = <string>form.value.password;
      const email: string = <string>form.value.email;
      const address: string = <string>form.value.address;
      const phone: string = <string> form.value.phone;
      this.authService.register(username, role, password, email, address, phone).subscribe(
        (data) => {
          console.log('Newly created customer', data);
          form.reset();
          debugger;
          return this.router.navigate([`/`])
        },error =>
          console.log('Error upon creating account', error)
        );
    }
  }
}
