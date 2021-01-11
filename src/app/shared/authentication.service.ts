import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl: string = `https://maxbac-demo.herokuapp.com`

  constructor(private http: HttpClient) { }

  register(username, role, password) {
    let payload = {
      password,
      username,
      role
    }
    const registerUserUrl = `${this.baseUrl}/auth-api/register`;
    return this.http.post(registerUserUrl, payload)
  }

  signIn(username, role, password) {
    let payload = {
      username,
      role,
      password
    };
    const signInUrl = `${this.baseUrl}/auth-api/signin`;
    return this.http.post(signInUrl, payload)
  }

  logOut() {
    localStorage.removeItem(`bearer_token`);
  }

  setLocalStorage(token) {
    localStorage.setItem('bearer_token', token);
  }




}
