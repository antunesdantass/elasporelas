import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

import { LoginProvider } from '../../providers/authentication/login.provider';
import { TabsPage } from '../../pages/tabs/tabs';

import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';
import { User } from '../../models/user';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  templateUrl: 'register.page.html',
  providers:[LoginProvider]
})
export class Register {
    form;
    picture;

    cameraOptions: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType:0
    }

    constructor(public alertCtrl: AlertController, 
                private loginProvider: LoginProvider, 
                private navController: NavController,
                private camera: Camera) {
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            lastname: new FormControl("", Validators.required),
            email: new FormControl("", [Validators.required,Validators.email]),
            password: new FormControl("", [Validators.required])
        });
    }

    processForm() {
        let alert = this.alertCtrl.create({
            title: "Conta Criada",
            message: "Conta criada para: " + this.form.value.name + " " + this.form.value.lastname,
            buttons: [{
                text: 'Ok',
            }]
        });

        if (this.form.status === 'VALID') {
            alert.present();
        }
        let usuario = this.form.value;
        usuario.imagem = this.picture;
        this.loginProvider.addUser(usuario);
        this.loginProvider.login(usuario.email, usuario.password).then(() => this.navController.push(TabsPage));
    }

    getPicture() {
        this.camera.getPicture(this.cameraOptions).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.picture = base64Image;
           }, (err) => {
            // Handle error
           });
    }

}