import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailServiceService} from '../../common/cocktail-service.service'
import { AppComponent } from './app.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [CocktailServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
