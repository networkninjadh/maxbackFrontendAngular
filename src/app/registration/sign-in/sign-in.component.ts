import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthenticationService} from "../../shared/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'role': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  signIn(form: FormGroup) {
    if (form.value.username && form.value.role && form.value.password) {
      this.authService.signIn(form.value.username, form.value.role, form.value.password)
        .subscribe((data: any) => {
          form.reset();
          this.authService.setJwtToken(data.token);
          return this.router.navigate(['/'])
        }, (error => console.log('Error during sign in ', error)))
    }
    return;
  }
}
