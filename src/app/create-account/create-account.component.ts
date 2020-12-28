import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {debounceTime, tap} from "rxjs/operators";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createAccountForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'repeatPassword': new FormControl(null, Validators.required)
    });
    // this.validatePasswords();
    console.log(this.createAccountForm);
  }

  createAccount() {
    if (this.createAccountForm.get('password').value !== this.createAccountForm.get('repeatPassword').value) {

    }
    console.log('Successful create account');
    return;
  }

  // validatePasswords() {
  //   this.createAccountForm.controls['repeatPassword'].valueChanges.pipe(
  //     debounceTime(300),
  //     tap(data => console.log(data))
  //   ).subscribe((data) => {
  //     console.log(data);
  //   })
  // }



}
