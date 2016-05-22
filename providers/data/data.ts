import {Injectable} from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  storage: Storage;
  resLogin: any;
  pages: Array<{title: string, icon : string, component: any}>;
  
  constructor() {
      this.storage = new Storage(SqlStorage, { name: 'mobilePOSDb' });
    }

  inicializaDb() {
      return this.storage.query('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, ap_paterno TEXT, ap_materno TEXT, login TEXT, contraseña TEXT, correo TEXT, telefono TEXT, estatus INTEGER)');
  }

  iniciarSesion(usuario, contrasena) {
      let query = 'SELECT * FROM usuarios WHERE login = ? AND contraseña = ?';

      return this.storage.query(query, [usuario, contrasena]).then((data) => {
          return data;
      }, (error) => {
          return error;
     });
  }

  insertarUsuario() {
      let query = 'INSERT INTO usuarios (nombre, ap_paterno, ap_materno, login, contraseña, correo, telefono, estatus) VALUES(?,?,?,?,?,?,?,?)';
      return this.storage.query(query, ['Manuel Antonio', 'Guillen', 'Gomez', 'maguilleng', 'Fender31', 'maguilleng@outlook.com', '9932790918', 1]).then((data) => {
          console.info('USUARIO INSERTADO CORRECTAMENTE');
      }, (error) => {
          console.info('ERROR AL INSERTAR');
          return error;
      });
  }
}

