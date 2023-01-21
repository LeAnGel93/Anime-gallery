import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimesPageComponent } from './pages/animes-page/animes-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { Galeria1Component } from './pages/galerias/galeria1/galeria1.component';
import { Galeria2Component } from './pages/galerias/galeria2/galeria2.component';
import { Galeria3Component } from './pages/galerias/galeria3/galeria3.component';
import { Galeria4Component } from './pages/galerias/galeria4/galeria4.component';
import { Galeria5Component } from './pages/galerias/galeria5/galeria5.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimesPageComponent,
    HomePageComponent,
    HeaderComponent,
    GalleryComponent,
    Galeria1Component,
    Galeria2Component,
    Galeria3Component,
    Galeria4Component,
    Galeria5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
