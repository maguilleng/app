import {Page, Loading, NavController, App} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {UserService} from '../../providers/user-service/user-service';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {VentasPage} from '../ventas/ventas';

@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    usuario: string;
    contrasena: string;
    loginError: boolean;
    loginForm: ControlGroup;

    constructor(private userService: UserService, 
        private fb: FormBuilder, 
        private nav: NavController,
        private data: Data) {
        console.info('ENTRANDO A CONSTRUCTOR P�GINA LOGIN');
        this.loginForm = fb.group({
            login: ["", Validators.required],
            password: ["", Validators.required]
        });
        this.usuario = 'maguilleng';
        this.contrasena = 'Fender31';
    }

    iniciarSesion() {
        let spinner = Loading.create();
        this.nav.present(spinner);
        this.userService.iniciarSesion(this.usuario, this.contrasena).subscribe(data => {
            if (data == 'USUARIO_NO_EXISTE' || data == 'ERROR_LOGIN')
                this.loginError = true;
            else if (data == 'USUARIO_LOGUEADO')
                this.cargarPaginaInicio();

            spinner.dismiss();
        }, error => {
            console.info('ERROR_LOGIN');
        });
    }

    cargarPaginaInicio() {
        // set our app's pages
        this.data.pages = [
            { title: this.userService.UsuarioLogueado.nombre, icon: 'contact',component: VentasPage },
            { title: 'Ventas', icon: 'logo-usd',component: VentasPage },
            { title: 'Opciones', icon: 'options',component: VentasPage },
            { title: 'Administración', icon: 'keypad',component: VentasPage }
        ];
        this.usuario = '';
        this.contrasena = '';
        this.loginError = false;
        this.nav.setRoot(VentasPage);
    }

    insertarUsuario() {
        this.userService.insertarUsuario();
    }

    limpiarLogin() {

    }
}
