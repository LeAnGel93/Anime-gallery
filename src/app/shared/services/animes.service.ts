import { HttpClient } from '@angular/common/http'; //tenemos que importar de angular el http 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
constructor(private http: HttpClient) {} //constructor es un constructor de clase
//Este constructor va a recoger un "fetch" (HttpClient) que recoge los metodos CRUD, para pasarselos mas tarde al servicio

getAnimes() {
  return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=6")
}
getAnimesGallery2() {
  return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-average_rating")
}

getAnimesGallery3() {
  return this.http.get("https://kitsu.io/api/edge/manga?limit=6")
}

getAnimesGallery4() {
  return this.http.get("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=5")
}

getAnimesGallery5() {
  return this.http.get("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=10")
}

//la funcion recoge el fetch con la url de la api seleccionada, con el metodo get en este caso, y se pasa a 

}
