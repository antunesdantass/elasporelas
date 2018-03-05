import { Injectable, OnInit } from "@angular/core";
import { User } from "../../models/user";

@Injectable()
export class LoginProvider {

    self = this;
    
    private loggedIn: boolean;

    private users: User[] = new Array();

    constructor() {
        this.users.push(new User("Maria", "Ana", "maria.ana@ufcg.com", "12345678"));
        this.users.push(new User("Neuza", "Eliete", "neuza.eliete@ufcg.com", "12345678"));
        this.users.push(new User("Mariana", "Silva", "mariana.silva@ufcg.com", "12345678"));
    }

    getLoggedUser() {
        return localStorage.getItem("user");
    };

    login(username: string, password: string): Promise<any> {
        const promise = this.authenticate(username, password);
        promise.then(success => {
            this.loggedIn = true;
            localStorage.setItem("user", success.data);
        }, error => {
            this.loggedIn = false;
        });

        return promise;
    };

    isLogged():boolean {
        console.log(this.getLoggedUser())
        return this.getLoggedUser() ? true : false;
    };

    private authenticate(username: string, password: string): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const user = this.users.find(usuario => usuario.email === username);
            user ? user.password === password ? resolve({data:user}) : reject() : reject();
        });

        return promise;
    };
}