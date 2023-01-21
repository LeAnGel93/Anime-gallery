import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnimesPageComponent} from './pages/animes-page/animes-page.component';
import { Galeria1Component } from './pages/galerias/galeria1/galeria1.component';
import { Galeria2Component } from './pages/galerias/galeria2/galeria2.component';
import { Galeria3Component } from './pages/galerias/galeria3/galeria3.component';
import { Galeria4Component } from './pages/galerias/galeria4/galeria4.component';
import { Galeria5Component } from './pages/galerias/galeria5/galeria5.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "animes", component: AnimesPageComponent},
  {path: "animes/galeria1", component: Galeria1Component},
  {path: "animes/galeria2", component: Galeria2Component},
  {path: "animes/galeria3", component: Galeria3Component},
  {path: "animes/galeria4", component: Galeria4Component},
  {path: "animes/galeria5", component: Galeria5Component},
 // {path: "animes/:galeria", component: Galeria5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

