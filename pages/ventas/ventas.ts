import {Page, NavController} from 'ionic-angular';
import {UserService} from '../../providers/user-service/user-service';
import {Usuario} from '../../entidades/usuario';
import {NuevaVentaPage} from '../nueva-venta/nueva-venta';
@Page({
  templateUrl: 'build/pages/ventas/ventas.html',
})
export class VentasPage {
    private nuevaVenta : any = NuevaVentaPage;
    constructor(public nav: NavController, public userSrv: UserService) {
    }
    openPage(page: any) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        console.info("entraaa")
        this.nav.push(page);
    }
}
