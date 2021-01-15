
import { Injectable } from '@angular/core';
import { UserCredentials } from "./UserCredentials";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from './UserDetails';
import { Customer } from './app/registration/create-account/Customer';


@Injectable()
export class AuthenticationService {
    private apiUrl = "auth-api/";
    constructor(private http: HttpClient) {
    }

    registerUser(userCredentials:UserCredentials): Promise<UserDetails> {
        return this.http.post(this.apiUrl + "register", JSON.stringify(userCredentials))
        .toPromise()
        .then(response => response as UserDetails)
        .catch();
    }

    loginUser(userCredentials:UserCredentials): Promise<string> {
        return this.http.post(this.apiUrl + "signin", JSON.stringify(userCredentials))
        .toPromise()
        .then(response => response as string)
        .catch();
    }

    createCustomer(customer:Customer, token:string): Promise<Customer> {
       let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer + ${token}`
          });
          let options = { headers: headers};
          console.log("token");
          console.log(localStorage.getItem('token'));
      return this.http.post("https://maxbac-demo.herokuapp.com/customer-api/customers/new", JSON.stringify(customer), options)
      .toPromise()
      .then(response => response as Customer)
      .catch();
        }
}