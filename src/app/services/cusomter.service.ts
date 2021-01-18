import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { CONSTANTS } from  './CONSTANTS';
import { shareReplay, switchMap, tap, map as rxMap } from "rxjs/operators";
import { Customer } from '../registration/create-account/Customer';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    constructor(private http: HttpClient) {}

    getCustomer(){
        debugger;
        return this.http.get<Customer>("https://maxbac-demo.herokuapp.com/profile-api/customer/", 
        {headers:{Authorization:`Bearer ${localStorage.getItem("bearer_token")}`}})
        debugger;
    }
}