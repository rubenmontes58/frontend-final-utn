import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AlbumComponent } from './pages/album/album.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthComponent } from './pages/auth/auth.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    NavbarComponent,
    FooterComponent,
    AlbumComponent,
    ContactoComponent,
    AuthComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-fiyxzr3t.us.auth0.com',
      clientId: 'MxnbYQMl6Yw3TXlVlgjW05NadmGnfYtq'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
