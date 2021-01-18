import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';
import {Component, OnInit} from '@angular/core';
import {Customer} from '../registration/create-account/Customer';
import {CustomerService} from '../services/cusomter.service';
import {CONSTANTS} from '../shared/CONSTANTS';
import {Observable} from 'rxjs';


var IMAGES = "files/customer-profile/customer/";
var INSURANCE = CONSTANTS.PRODUCTION_BASE_URL + IMAGES;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileImage: any;
  profileImageUploadForm: FormGroup;
  dataUploadForm: FormGroup;
  customer = new Customer(null, null, null, null, null, null, null);

  constructor(private http: HttpClient, private customerService: CustomerService) {
    this.http = http;
  }

  ngOnInit(): void {
    this.profileImageUploadForm = new FormGroup({
      'profile': new FormControl('')
    });
    this.dataUploadForm = new FormGroup({
      'license': new FormControl(''),
      'insurance': new FormControl(''),
      'receipts': new FormControl(''),
      'w2s': new FormControl(''),
      'other': new FormControl('')
    })

    this.customerService.getCustomer().subscribe(data => {
      console.log('INSIDE THE PROFILE PAGE', data);
      debugger;
      this.customer = data;
      return;
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.profileImageUploadForm.get('profile').value);
    this.http.post<any>(`${CONSTANTS.PRODUCTION_BASE_URL}${CONSTANTS.UPLOAD_PROFILE_IMAGE}`,
      formData).subscribe((res) => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
          this.profileImage = reader.result;
        }, false);
      },
      (err) => console.log(err)
    );
  }

  onSubmitData() {
    const formData2 = new FormData();
    const customerId = '4'
    formData2.append('file', this.dataUploadForm.get('license').value);
    this.http.post<any>(`${CONSTANTS.PRODUCTION_BASE_URL}${CONSTANTS.UPLOAD_LICENSE.replace('~customerId', customerId)}`,
      formData2).subscribe((res) => {
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
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileImageUploadForm.get('profile').setValue(file);
    }
  }

  onFileSelect2(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.dataUploadForm.get('license').setValue(file);
    }
  }
}
