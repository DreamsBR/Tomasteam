import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-eliminar-contactos',
  templateUrl: './eliminar-contactos.component.html',
  styleUrls: ['./eliminar-contactos.component.css']
})
export class EliminarContactosComponent implements OnInit {

  usuario:any ={};

  contactos:any=[];
  
  contacto:any ={};

  crear:boolean =false;
  
  loading:boolean=false;
  URL = "http://localhost:9090/contacto";

    constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      if(!this.usuario){
        location.href="/";
      }
      else{
        this.contacto={usuarioCorreo:this.usuario.Correo,correoList:[],telefonoList:[],direccionList:[],facturaList:[]};
        this.buscarContactos();
      }
    }
  logout(){
      localStorage.removeItem("usuario");
      location.href="/"
    }
    buscarContactos(){
      this.loading=true;
      this.buscarContactosServicio().subscribe((Response:any)=>this.llenarContactos(Response));
    }
    buscarContactosServicio():Observable<any>{
      return this.http.get<any>("http://localhost:9090/contacto/buscar")
    }
    llenarContactos(contactos:any){
      this.contactos = contactos;
      this.loading=false;
    }
    agregar(){
      this.crear =!this.crear;
  
    }
    crearContacto(){
      let formulario:any=document.getElementById("crear");
      let formularioValido:boolean = formulario.reportValidity();
      if(formularioValido){
        this.loading=true;
        this.contactoServicio().subscribe(
      data => this.finalizarCrearContacto(data)
        );
    }
  }
  eliminarContacto(idcontacto:number):void {
    this.eliminarservicio(idcontacto).subscribe(() => {
      this. buscarContactos()
    });
}

  eliminarservicio(idcontacto: number,): Observable<any> {
    return this.http.delete(this.URL + '/eliminar/' + idcontacto)
}

  contactoServicio(){
        var httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
        return this.http.post<any>("http://localhost:9090/contacto/guardar", this.contacto, httpOptions);
      }
      finalizarCrearContacto(contacto:any){
        if(contacto){
          alert("contacto creado exitosamente");
        }
        this.contacto={usuarioCorreo:this.usuario.correo,correoList:[],telefonoList:[],direccionList:[],facturaList:[]};
        this.crear = true;
        this.buscarContactos();
      }
      agregarTelefono(){
        this.contacto.telefonoList.push({});
      }
      borrarTelefono(telefono:any){
        this.contacto.telefonoList.splice(this.contacto.telefonoList.indexOf(telefono),1);
      }
      agregarCorreo(){
        this.contacto.correoList.push({});
      }
      borrarCorreo(correo:any){
        this.contacto.correoList.splice(this.contacto.correoList.indexOf(correo),1);
      }
      agregarDireccion(){
        this.contacto.direccionList.push({});
      }
      borrarDireccion(direccion:any){
        this.contacto.direccionList.splice(this.contacto.correoList.indexOf(direccion),1);
      }
    
 
      eliminar(idcontacto: number):void {
        this.eliminarservicio(idcontacto).subscribe(() => {
          this. buscarContactos()
        });
    }
    

    
 
    }
  
 

