import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private urlEndPoint: string = 'http://localhost:9090/contacto/';


  getContacto():Observable<any>{
    return this.http.get<any>(this.urlEndPoint + 'buscar').pipe();
  }

  
}
