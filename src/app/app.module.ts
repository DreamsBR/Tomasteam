import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { EliminarUsuariosComponent } from './eliminar-usuarios/eliminar-usuarios.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { EliminarContactosComponent } from './eliminar-contactos/eliminar-contactos.component';
import { FacturaComponent } from './factura/factura.component';
import { DeudacontactoComponent } from './deudacontacto/deudacontacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AddContactoComponent } from './add-contacto/add-contacto.component';




@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SigninComponent,
    HomeAdminComponent,
    MenuAdminComponent,
    EliminarUsuariosComponent,
    MenuUsuarioComponent,
    EliminarContactosComponent,
    FacturaComponent,
    DeudacontactoComponent,
    ServiciosComponent,
    AddContactoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
