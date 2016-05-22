export class Usuario {
    id: number;
    nombre: string;
    login: string;
    contrasena: string;
    estatus: number;

    constructor(usuario: any) {
        this.id = usuario.id;
        this.nombre = usuario.nombre;
        this.login = usuario.login;
        //this.contrasena = usuario.contrasena;
        this.estatus = usuario.estatus;
    }
}
