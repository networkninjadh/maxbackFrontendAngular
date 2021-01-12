import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from "./sign-in/sign-in.component";
import {CreateAccountComponent} from "./create-account/create-account.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ SignInComponent, CreateAccountComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [ SignInComponent, CreateAccountComponent ]
})
export class RegistrationModule { }
