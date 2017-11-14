import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing

import { APP_ROUTING } from "./app.routes";

//Services

import { ScientistsService } from "./services/scientists.service";
import { QuotesService }     from "./services/quotes.service";

//Components
import { NavbarComponent }     from "./components/shared/navbar/navbar.component";
import { FooterComponent }     from "./components/shared/footer/footer.component";
import { HomeComponent }       from "./components/home/home.component";
import { AboutComponent }      from "./components/about/about.component";
import { ScientistsComponent } from "./components/scientists/scientists.component";
import { QuotesComponent }     from "./components/quotes/quotes.component";
import { QuoteComponent }      from "./components/quote/quote.component";
import { ScientistComponent }  from "./components/scientist/scientist.component";
import { SearchComponent }     from "./components/search/search.component";

import { DomseguroPipe }           from "./pipes/domseguro.pipe";

import { AppComponent }        from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    QuotesComponent,
    ScientistsComponent,
    QuoteComponent,
    ScientistComponent,
    SearchComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ScientistsService,
              QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
