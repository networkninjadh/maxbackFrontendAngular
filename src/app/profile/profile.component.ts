import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../registration/create-account/Customer';
import { CustomerService } from '../services/cusomter.service';
import { CONSTANTS } from '../shared/CONSTANTS';
import { Observable } from 'rxjs';



var IMAGES = "files/customer-profile/customer/";
var INSURANCE = CONSTANTS.BASE_URL + IMAGES;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileImage:any;
  profileImageUploadForm:FormGroup;
  dataUploadForm:FormGroup;
  customer = new Customer(null, null, null, null, null, null,null);
  http:HttpClient;

  constructor(http:HttpClient, private customerService: CustomerService, private formBuilder:FormBuilder) {
    this.http = http;
  }

  ngOnInit(): void {
    this.profileImageUploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.dataUploadForm = this.formBuilder.group({
      license: [''],
      insurance: [''],
      receipts: [''],
      w2s: [''],
      other: ['']
    })
    this.customerService.getCustomer().subscribe(data => {
      this.customer = data;
      console.log(data);
    });  
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.profileImageUploadForm.get('profile').value);
    this.http.post<any>("https://maxbac-demo.herokuapp.com/files/customer-profile/profile-image/"+this.customer.customerId, formData, {headers: { Authorization: `Bearer ${localStorage.getItem('bearer_token')}`}}).subscribe(
      (res) => {
       let reader = new FileReader();
       reader.addEventListener("load", () => {
         this.profileImage = reader.result;
       }, false);
      },
      (err) => console.log(err)
    );
  }

  onSubmitData(){
    const formData2 = new FormData();
    formData2.append('file', this.dataUploadForm.get('license').value);
    this.http.post<any>("http://localhost:8080/files/customer-profile/customer/"+this.customer.customerId+"/license", formData2, {headers: { Authorization: `Bearer ${localStorage.getItem('bearer_token')}`}}).subscribe(
      (res) => {
          let reader = new FileReader();
          reader.addEventListener("load", () => {
          //this.customer.userFiles.license.push(res);
            console.log(res);
        }, false);
      },
         (err) => console.log(err)
      );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0){
      const file = event.target.files[0];
      this.profileImageUploadForm.get('profile').setValue(file);
    }
  }

  onFileSelect2(event) {
    if (event.target.files.length > 0){
      const file = event.target.files[0];
      this.dataUploadForm.get('license').setValue(file);
    }
  }
}
