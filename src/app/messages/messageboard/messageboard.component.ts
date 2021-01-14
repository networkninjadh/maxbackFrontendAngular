import { Component, OnInit } from '@angular/core';
import { Message } from "../../shared/models";

@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.scss']
})
export class MessageboardComponent implements OnInit {

  messages: Message[];

  constructor() { }

  ngOnInit(): void {
  }

}
