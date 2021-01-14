import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CONSTANTS} from  './CONSTANTS';

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
    return this.http.post(`${CONSTANTS.BASE_URL}/auth-api/register`, payload)
  }

  signIn(username, role, password) {
    let payload = {
      username,
      role,
      password
    };
    return this.http.post(`${CONSTANTS.BASE_URL}/auth-api/signin`, payload)
  }

  logOut() {
    localStorage.removeItem(`bearer_token`);
  }

  setLocalStorage(token) {
    localStorage.setItem('bearer_token', token);
  }

}
