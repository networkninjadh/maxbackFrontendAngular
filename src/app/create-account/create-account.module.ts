import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateAccountComponent} from "./create-account.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ]
})
export class CreateAccountModule { }
