import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { routing } from './app.routing'
import { AppComponent }   from './app.component';

import { NavBarComponent }   from './navbar/nav-bar.component';
import { HomeViewComponent }   from './home/home-view.component';
import { ExemploViewComponent }   from './exemplo/exemplo-view.component';



@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    routing ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeViewComponent,
    ExemploViewComponent
  ],
  bootstrap:    [ AppComponent,NavBarComponent  ]
})
export class AppModule { }
