import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  usuario:any ={};

  facturas: any = [];

  factura: any = {};

  crear: boolean = false;

  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
this.factura=JSON.parse(localStorage.getItem("usuario"))
    if(!this.usuario){
    location.href="/";
  }
  else{
    this.factura = {factura:this.factura.codfactura,contactoList:[],serviciosList:[],categoriadeudaList:[]};
    this.buscarFacturas();
  }
  }

Factura() {
    let formulario: any = document.getElementById("crear");
    let formularioValido: boolean = formulario.reportValidity();
    if (formularioValido) {
      this.loading = true;
      this.facturaService().subscribe(
        data => this.finalizarCrearFactura(data)
      );
    }
  }

  confirmar(resultado: any) {
    this.loading = false;
    if (resultado) {
      alert("factura creada exitosamente.")

    }
  }

  llenarFacturas(facturas: any) {
    this.facturas = facturas;
    this.loading = false;
  }
  agregar() {
    this.crear= !this.crear;

  }
  facturaService() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:9090/factura/guardar", this.factura, httpOptions)

    }
  
   finalizarCrearFactura(factura: any) {
    if (factura) {
      alert("contacto creado exitosamente");
    }
    this.factura = {factura:this.factura.codfactura,contactoList:[],serviciosList:[],categoriadeudaList:[]};
    this.crear = true;
    this.buscarFacturas();
  }

  buscarFacturas() {
    this.loading = true;
    this.buscarFacturasServicio().subscribe((Response: any) => this.llenarFacturas(Response));
  }
  
  agregarContacto(){
    this.factura.contactoList.push({});
  }
  borrarContacto(contacto:any){
    this.factura.contactoList.splice(this.factura.contactoList.indexOf(contacto),1);
  }

  agregarServicio(){
    this.factura.serviciosList.push({});
  }
  borrarServicio(servicio:any){
    this.factura.serviciosList.splice(this.factura.serviciosList.indexOf(servicio),1);
  }


  agregarcategoriadeuda(){
    this.factura.categoriadeudaList.push({});
  }
  borrarcategoriadeuda(categoriadeuda:any){
    this.factura.categoriadeudaList.splice(this.factura.categoriadeudaList.indexOf(categoriadeuda),1);
  }

  buscarFacturasServicio(): Observable<any> {
    return this.http.get<any>("http://localhost:9090/factura/buscar/"+this.factura.codfactura )
  }

 
  regresar() {
    location.href = "/";
  }
  

}
