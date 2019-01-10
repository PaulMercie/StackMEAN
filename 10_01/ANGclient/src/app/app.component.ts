/*
Importer les class/interfaces
*/
import { Component } from '@angular/core';
//

/*
Configuration des composants et export
*/
  // Configuration
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

  // Export
  export class AppComponent {
    /*
    Déclaration de variables
    */
    public myTitle: String
    public userName: String

    //Injecter des valeurs dans la class
    constructor(){
      this.myTitle = `Hello Angular`
      this.userName = `Paul`
    }
    //

    /*
    Méthodes
    */
    // Fonction pour activer une alert()
    public displayAlert(){
      alert('click')
    }
    //

  }
