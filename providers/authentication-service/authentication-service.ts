import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Data} from '../data/data';
import {Usuario} from '../../entidades/usuario';

@Injectable()
export class AuthenticationService {
    public usuarioLogueado: Usuario;

    constructor(private dataService: Data) {
    }

    iniciarSesion(usuario, contrasena): Observable<string>{
      console.info(usuario);
      console.info(contrasena);

      let resultado = this.dataService.iniciarSesion(usuario, contrasena);

      return Observable.create(observer => {
          resultado.then((data) => {
              console.log(data);
              if (data.res.rows.length > 0) {
                  observer.next('USUARIO_LOGUEADO');
                  observer.complete();
              } else {
                  observer.next('USUARIO_NO_EXISTE');
                  observer.complete();
              }
          }, (error) => {
              observer.next('ERROR_FATAL');
              observer.complete();
          });
      });      
    }

  insertarUsuario() {
      let res = this.dataService.insertarUsuario();
  }
}

