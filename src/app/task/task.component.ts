import { Component } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users'; //3. Elements depuis fichier 
import { Input } from '@angular/core'; //3. Décorateur @Input(), qui sert à recevoir des données depuis un autre composant parent.
import { Output } from '@angular/core'; //3. Décorateur @Output(), permet de d'envoyer des événements d'un composant enfant vers un composant parent. 



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  //Input the user name
  @Input({required: true}) name!: string; //4. La propriété 'name' attend de recevoir une valeur du parent

}
