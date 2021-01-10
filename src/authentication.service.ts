import { Injectable } from '@angular/core';
import { UserCredentials } from "./UserCredentials";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from './UserDetails';

@Injectable()
export class AuthenticationService {
    private apiUrl = "auth-api/";
    constructor(private http: Http) {
    }

    registerUser(userCredentials:UserCredentials): Promise<UserDetails> {
        return this.http.post(this.apiUrl + "register", JSON.stringify(userCredentials))
        .toPromise()
        .then(response => response.json() as UserDetails)
        .catch();
    }

    loginUser(userCredentials:UserCredentials): Promise<string> {
        return this.http.post(this.apiUrl + "signin", JSON.stringify(userCredentials))
        .toPromise()
        .then(response => response.json() as string)
        .catch();
    }
}