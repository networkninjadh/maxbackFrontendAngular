export class UserCredentials {
    password: string;
    role: string;
    username: string;

    constructor(password: string, username: string, role: string) {
        this.password = password;
        this.role = role;
        this.username = username;
    }
}