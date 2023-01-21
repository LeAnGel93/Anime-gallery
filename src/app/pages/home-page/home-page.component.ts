import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimesService } from 'src/app/shared/services/animes.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

constructor(private animeService: AnimesService) {} 
// creamos un constructor que va a recoger la clase AnimesService (de animes.service.ts), que recordemos actua como un fetch sobre la API seleccionada (en animeServices.ts)

// https://codingpotions.com/angular-oninit --> constructor y ngOnInit

animes: any; // creamos una variable que vamos a usar mas tarde para devolver datos

ngOnInit(){ //una funcion/metodo de angular que se ejecuta una única vez, y no se renderiza mas veces
  console.log('Me creo');
  this.animeService.getAnimes().subscribe((res: any) => { //cogemos el constructor para que nos recoja la funcion getAnimes(que nos devolvia la URL) junto a un subscribe que es basicamente el .then de fetch, y en parametro la respuesta, que tendrá cualquier valor (any)
    this.animes = res.data; //usamos la variable vacia  animes para darle de valor la respuesta del fetch, cuya api tiene el valor data, que es el valor principal del json (del que cuelgan todas las propiedades de la api)
    console.log(this.animes);
  })

}
ngOnDestroy(){
  console.log('Me destuyo');
  
  
}}


