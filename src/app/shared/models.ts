import {Injectable} from "@angular/core";
import {Adapter} from "../core/adapter";

export class Message {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public author: string,
  ) {}
}

export class MessageBoard {
  constructor(
    public id: number,
    public messages: Message[],
    public administrator: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class MessageAdapter implements Adapter<Message> {
  adapt(item: any): Message {
    return new Message(item.id, item.title, item.body, item.author);
  }
}

@Injectable({
  providedIn: 'root'
})
export class MessageBoardAdapter implements Adapter<MessageBoard> {
  adapt(item: any): MessageBoard {
    return new MessageBoard(item.id, item.messages, item.administrator);
  }
}
