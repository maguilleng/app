import {ViewChild} from '@angular/core';
import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {Data} from './providers/data/data';
import {UserService} from './providers/user-service/user-service';

@App({
    templateUrl: 'build/app.html',
    providers: [Data, UserService],
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage: any = LoginPage;
    pages: Array<{ title: string, component: any }>;

    constructor(
        private platform: Platform,
        private menu: MenuController,
        private dataService: Data,
        public userSrv: UserService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.dataService.inicializaDb().then((data) => {
                console.log('Base de Datos Inicializada exitosamente');
            }, (error) => {
                console.error('Error al INICIALIZAR LA BASE DE DATOS');
            });
            StatusBar.styleDefault();
        });
    }

    openPage(page: any) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
    cerrarSesion() {
        this.userSrv.UsuarioLogueado = undefined;
        this.nav.setRoot(LoginPage);
    }
}
