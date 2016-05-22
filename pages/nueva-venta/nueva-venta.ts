import {Page, NavController, Modal} from 'ionic-angular';
import {ModalAgregarArticuloPage} from '../modal-agregar-articulo/modal-agregar-articulo';
/*
  Generated class for the NuevaVentaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/nueva-venta/nueva-venta.html',
})
export class NuevaVentaPage {
    private items: Array<{ id: number, desc: string, desc2: string, total: number }>;
    private total_a_pagar: number;
    constructor(public nav: NavController) {
        this.nav = nav;
        this.items = [
            { id: 1, desc: 'Crepa', desc2: 'Frambuesa', total: 30 },
            { id: 1, desc: 'Crepa', desc2: 'Queso manchego, piña', total: 30 },
            { id: 1, desc: 'Galleta', desc2: '', total: 30 },
            { id: 1, desc: 'Sabrita', desc2: '', total: 30 },
        ];
        this.total_a_pagar = 200;
    }
    itemTapped(item: any) {

    }
    showModalAddArticulo() {
        console.info("modal")
        let modal = Modal.create(ModalAgregarArticuloPage);
        this.nav.present(modal)
    }
}
