import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-eliminar-usuarios',
  templateUrl: './eliminar-usuarios.component.html',
  styleUrls: ['./eliminar-usuarios.component.css']
})
export class EliminarUsuariosComponent implements OnInit {

  

  URL = "http://localhost:9090/usuario";
  usuario: any = {};


  usuarios: any = [];
  elimnar:any=[];
  loading: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!this.usuario) {
      location.href = "/";
    } else {
      //si es diferente de uno no tiene permisos de usuario vuelve al home necesita el rol de usuario!!!!!!
      if (this.usuario.rolIdrol != 1) {
        location.href = "/";
          }    else{
          this.usuario={};
          this.buscarUsuarios();
        }
 

  }
}
  buscarUsuarios() {
    this.loading = true;
    this.buscarUsuariosServicio().subscribe((Response: any) => this.llenarUsuarios(Response));
  }
  buscarUsuariosServicio(): Observable<any> {
    return this.http.get<any>("http://localhost:9091/usuario/buscar/"+this.usuario.correo).pipe(
      catchError(e=>"error")) 
  } 
  llenarUsuarios(usuarios: any) {
    this.usuarios = usuarios;
    this.loading = false;
  }


  eliminar(correo:string):void {
    this.eliminarservicio(correo).subscribe(() => {
      this. buscarUsuarios()
    });
}

  eliminarservicio(correo: string,): Observable<any> {
    return this.http.delete(this.URL + '/eliminar/' + correo)
}

  logout() {
    localStorage.removeItem("usuario");
    location.href = "/"
  }

}
