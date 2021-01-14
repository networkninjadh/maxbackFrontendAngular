import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'maxbac-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message;

  constructor() { }

  ngOnInit(): void {
  }

}
