import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component"; //3.Importer UserComponent dans AppComponent
import { DUMMY_USERS } from "./user/dummy-users"; //5. Importer les utilisateur


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent], //4.On ajoute UserComponent dans imports, ce qui permet d'afficher des utilisateurs dynamiquement.


  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS; //6. Rajouter une propriété pour stocker les utilisateurs
}
