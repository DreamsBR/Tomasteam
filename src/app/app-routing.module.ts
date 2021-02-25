import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {MenuAdminComponent} from './menu-admin/menu-admin.component';
import {EliminarUsuariosComponent} from './eliminar-usuarios/eliminar-usuarios.component';
import {EliminarContactosComponent} from './eliminar-contactos/eliminar-contactos.component';
import {MenuUsuarioComponent} from './menu-usuario/menu-usuario.component';
import {AddContactoComponent} from './add-contacto/add-contacto.component';
import {FacturaComponent} from './factura/factura.component'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path: 'home-admin',component:HomeAdminComponent},
  {path:'signin',component:SigninComponent},
  {path:'menu-admin',component:MenuAdminComponent},
  {path:'eliminar-usuarios',component:EliminarUsuariosComponent},
  {path:'eliminar-contactos',component:EliminarContactosComponent},
  {path: 'menu-usuario', component:MenuUsuarioComponent},
  {path: 'add-contacto', component:AddContactoComponent},
  {path: 'factura', component:FacturaComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
