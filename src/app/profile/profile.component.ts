import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

 fileToUpload: File = null;
 apiKey: string = "";
 sessionId: string = "";
 v_token:string = "";
 
 constructor() { }

ngOnInit(): void {
  
}

handleFileInput(files:FileList) {
    this.fileToUpload = files.item(0);   
}

}