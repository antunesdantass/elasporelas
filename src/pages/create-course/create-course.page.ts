import { Component } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";
import { LoginProvider } from "../../providers/authentication/login.provider";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Course } from "../../models/course";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CourseProvider } from "../../providers/course/course-provider";

@Component({
    templateUrl: './create-course.html',
    providers: [CourseProvider]
})
export class CreateCourse {
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
                private camera: Camera,
                private courseProvider: CourseProvider) {

        this.form = new FormGroup({
            nome: new FormControl("", Validators.required),
            descricao: new FormControl("", Validators.required),
            endereco: new FormControl("", [Validators.required]),
            valor: new FormControl("", [Validators.required, Validators.min(0)])
          });
      }
    
      processForm() {
        let alert = this.alertCtrl.create({
            title: "Curso Cadastrado!",
            message: "Parabéns, seu curso foi cadastrado com sucesso!",
            buttons: [{
                text: 'Ok',
            }]
        });

        const teacher = this.loginProvider.getLoggedUser();
    
        if (this.form.status === 'VALID') {
            alert.present();
            const curso = new Course();
            curso.nome = this.form.value.name;
            curso.descricao = this.form.value.descricao;
            curso.endereco = this.form.value.endereco;
            curso.valor = this.form.value.valor;
            curso.teacher = teacher.email;
            curso.imagem = this.picture;
            this.courseProvider.addCourse(curso);
            this.picture = undefined;
            this.form = new FormGroup({
                nome: new FormControl("", Validators.required),
                descricao: new FormControl("", Validators.required),
                endereco: new FormControl("", [Validators.required]),
                valor: new FormControl("", [Validators.required, Validators.min(0)])
              });
        }


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