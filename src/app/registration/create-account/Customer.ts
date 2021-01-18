
import { UserFiles } from './UserFiles';
export class Customer {
    customerId:number;
    accountStartDate:string;
    username:string;
    email:string;
    address:string;
    phone:string;
    userFiles:UserFiles;

    constructor(customerId:number, accountStartDate:string, username:string, email:string, address:string, phone:string, userFiles:UserFiles){
        this.customerId = customerId;
        this.accountStartDate = accountStartDate;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.userFiles = userFiles;
    }
}