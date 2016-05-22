import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Data} from '../data/data';
import {Usuario} from '../../entidades/usuario';

@Injectable()
export class UserService {
    //public LoginActivo: boolean;
    public UsuarioLogueado: Usuario

    constructor(private dataService: Data) { }

    iniciarSesion(usuario, contrasena): Observable<string> {
        console.info(usuario);
        console.info(contrasena);

        let resultado = this.dataService.iniciarSesion(usuario, contrasena);

        return Observable.create(observer => {
            resultado.then((data) => {
                if (data.res.rows.length > 0) {
                    this.obtenerUsuario(data.res.rows[0]);
                    //this.LoginActivo = true;
                    observer.next('USUARIO_LOGUEADO');
                    observer.complete();
                } else {
                    observer.next('USUARIO_NO_EXISTE');
                    observer.complete();
                }
            }, (error) => {
                observer.next('ERROR_LOGIN');
                observer.complete();
            });
        });
    }

    insertarUsuario() {
        let res = this.dataService.insertarUsuario();
    }

    obtenerUsuario(userData: any) {
        this.UsuarioLogueado = new Usuario(userData);
    }
}

