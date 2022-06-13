import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule, 
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})], // forRoot = p/ modulo principal // useHash = usar ou não #home na url
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'} // necessário para ter a navegação funcionando. Destaca que o APP_BASE_HREF vai estar apontando para a "/"
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
