import {Page, NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the ModalAgregarArticuloPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/modal-agregar-articulo/modal-agregar-articulo.html',
})
export class ModalAgregarArticuloPage {
  constructor(public nav: NavController, public viewCtrl: ViewController) {}
  close() {
    this.viewCtrl.dismiss();
  }
}
