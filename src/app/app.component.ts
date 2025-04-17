import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component"; 
import { DUMMY_USERS } from "./user/dummy-users"; 
import { TasksComponent } from "./tasks/tasks.component"; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  users = DUMMY_USERS; 
  selectedUserId?: string;

  onSelectUser(id: string) { 
   this.selectedUserId = id; 
  }

  //5. Trouver le nom a partir de l'id  de l'utilisateur
  get selectedUser() {
    return this.users.find((user)=> user.id === this.selectedUserId)!; //Retourne l'utilisateur ayant l'id de selectedUserId que l'ona trouver avec la methode onSelectUser  
  }
}
