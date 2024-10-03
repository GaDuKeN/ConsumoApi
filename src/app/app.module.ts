import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { ListagemMoedasComponent } from './paginas/listagem-moedas/listagem-moedas.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorMoedasComponent,
    InicialComponent,
    ListagemMoedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
