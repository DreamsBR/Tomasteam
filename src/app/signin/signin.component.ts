import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

usuario:any={rol_idrol:2};
loading:boolean=false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  crear(){
    let formulario: any = document.getElementById("crear");
    let formularioValido: boolean = formulario.reportValidity();
    if (formularioValido) {
      this.loading = true;
      this.createService().subscribe(
        data => this.confirmar(data)
      )
      }
  }
confirmar(resultado:any){
  this.loading=false;
  if(resultado){
    alert("usuario creado exitosamente.")
    this.usuario={rol_idrol:2};
  }
  else{
    alert("Error al crear el usuario");
  }
}

  createService(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:9090/usuario/guardar", this.usuario, httpOptions);
  }

regresar(){
  location.href="/";
}
}
