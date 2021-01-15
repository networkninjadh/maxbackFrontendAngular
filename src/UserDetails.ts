
export class UserDetails {
    id:number;
    grantedAuthorities:string
    password:string;
    username:string;
    role:string;
    accountNonExpired:boolean;
    accountNonLocked:boolean;
    credentialsNonExpired:boolean;
    authorities:Array<string>;
}