import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CocktailServiceService} from '../../common/cocktail-service.service'
import { AppComponent } from './app.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponentComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [CocktailServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
