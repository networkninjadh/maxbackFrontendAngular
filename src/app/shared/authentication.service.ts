import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CONSTANTS } from  './CONSTANTS';
import { shareReplay, switchMap, tap, map as rxMap } from "rxjs/operators";
import { Customer } from '../registration/create-account/Customer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register(username:string, role:string, password:string, email:string, address:string, phone:string) {
    let payload = {
      password,
      username,
      role
    }
    let payload2 = {
      username,
      email,
      address,
      phone
    }
    return this.http.post(`${CONSTANTS.PRODUCTION_BASE_URL}${CONSTANTS.REGISTER}`, payload).pipe(
      tap((data: any) => {
        return this.setJwtToken(data.token);
      }),
      switchMap((data) => {
        if (role === 'CUSTOMER') {
          let customer = new Customer(null, null, username, email, address, phone, null);
          return this.http.post(`${CONSTANTS.PRODUCTION_BASE_URL}${CONSTANTS.NEW_CUSTOMER}`, <Customer>payload2, data.token).pipe(shareReplay());
        } else {
          return;
        }
      }),
    )
  }

  signIn(username, role, password) {
    let payload = {
      username,
      role,
      password
    };
    return this.http.post(`${CONSTANTS.PRODUCTION_BASE_URL}${CONSTANTS.LOG_IN}`, payload).pipe(
      tap(data => this.setJwtToken(data['token'])),
      shareReplay()
    )
  }

  logOut() {
    localStorage.removeItem(`bearer_token`);
  }

  setJwtToken(token) {
    localStorage.setItem('bearer_token', token);
  }

}
