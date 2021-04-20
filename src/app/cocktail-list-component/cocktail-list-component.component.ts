import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from 'common/cocktail-service.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent implements OnInit {

  public listeCocktail = [];

  constructor(private cocktailService:CocktailServiceService) { }

  ngOnInit(): void {
    this.listeCocktail = this.cocktailService.getCocktails();
  }

}
