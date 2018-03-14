import { Injectable, OnInit } from "@angular/core";
import { User } from "../../models/user";

@Injectable()
export class LoginProvider {

    self = this;
    
    private loggedIn: boolean;

    private users: User[] = new Array();

    constructor() {}

    getLoggedUser(): User {
        const email = localStorage.getItem("user");
        let userList = JSON.parse(self.localStorage.getItem("users"));
        return email ? userList.find(user => user.email === email) : undefined;
    };

    login(username: string, password: string): Promise<any> {
        const promise = this.authenticate(username, password);
        promise.then(success => {
            this.loggedIn = true;
            self.localStorage.setItem("user", success.data.email);
        }, error => {
            this.loggedIn = false;
        });

        return promise;
    };

    isLogged():boolean {
        return this.getLoggedUser() ? true : false;
    };

    private authenticate(username: string, password: string): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            let userList = JSON.parse(self.localStorage.getItem("users"));
            const user = userList.find(usuario => usuario.email === username);
            user ? user.password === password ? resolve({data:user}) : reject() : reject({});
        });

        return promise;
    };

    addUser(user: User) {
        const users = self.localStorage.getItem("users");
        const usersArray = JSON.parse(users) || new Array();
        usersArray.push(user);
        self.localStorage.setItem("users", JSON.stringify(usersArray));
    }

    logout(): Promise<any> {
        self.localStorage.removeItem("user");
        this.loggedIn = false;
        return new Promise((resolve, reject) => resolve());
    }
}