import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageboardComponent} from "./messageboard/messageboard.component";
import {MessageComponent} from "./message/message.component";



@NgModule({
  declarations: [MessageboardComponent, MessageComponent ],
  imports: [
    CommonModule
  ],
  exports: [MessageboardComponent, MessageComponent]
})
export class MessagesModule { }
