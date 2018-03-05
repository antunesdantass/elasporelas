import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';

import { LoginProvider } from "../../providers/authentication/login.provider";
import { TabsPage } from "../../pages/tabs/tabs";

@Component({
    templateUrl: "./login.page.html",
    providers:[LoginProvider]
})
export class LoginPage {
    email: string;
    password: string;
    
    constructor(private loginProvider: LoginProvider,
                private navController: NavController) {}

    logar() {
        const promise = this.loginProvider.login(this.email, this.password);
        promise.then(success => {
            this.navController.push(TabsPage);
        }, error => {
            console.log("usuário ou senha errados");
        })
    }
}