import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component"; //Importer UserComponent dans AppComponent
import { DUMMY_USERS } from "./user/dummy-users"; //Importer les utilisateur


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent], //On ajoute UserComponent dans imports, ce qui permet d'afficher des utilisateurs dynamiquement.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS; //Rajouter une propriété pour stocker les utilisateurs

  //Méthode permettant de recevoir les éléments depuis l'enfant
  onSelectUser(id: string) { //Permet au parent de récupérer les données envoyées par l'enfant, et decide de l'action a adopter
    console.log('Selected user with id ' + id);
  }
}
