import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CONSTANTS } from  './CONSTANTS';
import { shareReplay, switchMap, tap, map as rxMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register(username, role, password) {
    let payload = {
      password,
      username,
      role
    }
    return this.http.post(`${CONSTANTS.BASE_URL}/auth-api/register`, payload).pipe(
      tap((data: any) => {
        return this.setJwtToken(data.token);
      }),
      switchMap((data) => {
        if (role === 'CUSTOMER') {
          return this.http.post(`${CONSTANTS.BASE_URL}/profile-api/customer/new`, data.token)
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
    return this.http.post(`${CONSTANTS.BASE_URL}/auth-api/signin`, payload).pipe(shareReplay())
  }

  logOut() {
    localStorage.removeItem(`bearer_token`);
  }

  setJwtToken(token) {
    localStorage.setItem('bearer_token', token);
  }

}
