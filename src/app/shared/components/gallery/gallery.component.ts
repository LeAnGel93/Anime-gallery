import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})



export class GalleryComponent {
  @Input() list:any;  
  @Input() list2:any;
  @Input() list3:any;
  @Input() list4:any;
  @Input() list5:any;
}

// realizamos los inputs del padre (los html donde pintamos, galeria1,2,3... en nuestro caso) que recogen todo el valor de la variable animes, declarada en el ts de la galeria correspondiente y dandole como valor la informacion data de la API que hemos querido usar (en animes.service) 