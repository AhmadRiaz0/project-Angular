import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component"; 
import { DUMMY_USERS } from "./user/dummy-users"; 
import { TaskComponent } from "./task/task.component"; //1. Importation du composant task

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent], //2. On ajoute TaskComponent dans imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  users = DUMMY_USERS; 
  selectedUserId = 'u1'; //3. Variable pour stocker l'utilisateur selectionner 

  //4. Trouver le Id de l'utilisateur
  onSelectUser(id: string) { 
   this.selectedUserId = id; //Permet de stocker l'id de l'utilisateur selectionner
  }

  //5. Trouver le nom a partire de l'id  de l'utilisateur
  get selectedUser() {
    return this.users.find((user)=> user.id === this.selectedUserId)!; //Retourne l'utilisateur ayant l'id de selectedUserId que l'ona trouver avec la methode onSelectUser  
  }
}
