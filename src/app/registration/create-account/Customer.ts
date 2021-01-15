
import { UserFiles } from './UserFiles';
export class Customer {
    id:number;
    accountStartDate:string;
    username:string;
    userFiles:UserFiles;

    constructor(id:number, accountStartDate:string, username:string, userFiles:UserFiles){
        this.id = id;
        this.accountStartDate = accountStartDate;
        this.username = username;
        this.userFiles = userFiles;
    }
}