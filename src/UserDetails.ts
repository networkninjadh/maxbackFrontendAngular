
export class UserDetails {
    id:string;
    grantedAuthorities:string
    password:string;
    username:string;
    role:string;
    accountNonExpired:boolean;
    accountNonLocked:boolean;
    credentialsNonExpired:boolean;
    authorities:Array<string>;
}