import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Gestion des formulaires
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // Ajouter les modules dans le tableau des modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
