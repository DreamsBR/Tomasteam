import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from './Usuario';
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class BookService {

    URL = "http://localhost:9090/usuario";
    constructor(private _http: HttpClient) { }

    getUsuarios(): Observable<usuario[]> {
        return this._http.get<usuario[]>(this.URL);

    }

    addUsuarios(correo: string, nombre: string, apellido: string, fotografia: string,  password: string,Rol_idRol: string): Observable<any> {
        let obj = {correo, nombre, apellido, fotografia, password,Rol_idRol }
        return this._http.post(this.URL, obj)
    }

    eliminar(correo: string,): Observable<any> {
        return this._http.delete(this.URL + '/' + correo)
    }

    getUsuario(correo: string): Observable<usuario> {
        return this._http.get<usuario>(this.URL + '/' + correo)
    }

    updateUsuario(correo: string, nombre: string, apellido: string, fotografia: string,  password: string,Rol_idRol: string) {
        let obj = { correo, nombre, apellido, fotografia, password,Rol_idRol  }
        return this._http.put(this.URL, obj)
    }
}