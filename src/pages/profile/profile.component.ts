import { Component } from "@angular/core";
import { LoginProvider } from "../../providers/authentication/login.provider";
import { User } from "../../models/user";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login.page";

@Component({
    templateUrl: './profile.html',
    providers: [LoginProvider]
})
export class Profile {
    loggedUser: User;

    constructor(private loginProvider: LoginProvider,
                private navController: NavController) {
        this.loggedUser = loginProvider.getLoggedUser();
    }

    logout() {
        this.loginProvider.logout().then(data => this.navController.push(LoginPage));
    }
} 