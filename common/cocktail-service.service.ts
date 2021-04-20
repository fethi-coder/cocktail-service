import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor() {
   }
   getCocktails(){
    return [{nom:"Mojito",price:34,img:"/assets/istockphoto-458658497-612x612.jpg"},
            {nom:"Pastis",price:45,img:"/assets/istockphoto-1021102082-612x612.jpg"},
            {nom:"Malibu",price:34,img:"/assets/istockphoto-1223771425-612x612.jpg"}]
  }

  }

