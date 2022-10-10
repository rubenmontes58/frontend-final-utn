import { AlbumComponent } from './pages/album/album.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductosComponent } from './pages/productos/productos.component';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { AuthComponent } from './pages/auth/auth.component';





const routes: Routes = [




  {path : '', component : AuthComponent},

  {path : 'auth', component : AuthComponent},

 

  {path : 'album', component : AlbumComponent},

  {path:'productos',component:ProductosComponent},

  {path:'contacto',component:ContactoComponent},

  

  {path:'**',redirectTo:'AuthComponent',pathMatch:'full'}













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
