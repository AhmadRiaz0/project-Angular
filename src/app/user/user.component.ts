import { Component, computed } from '@angular/core';
import { Input } from '@angular/core'; //Décorateur @Input(), qui sert à recevoir des données depuis un autre composant parent.
import { input } from '@angular/core'; //Fonction input, permet de transformer la propriété en fonction + on utilise le mecanisme de Signal pour la gestion des changements sur cette propriété
import { Output } from '@angular/core'; //Décorateur @Output(), permet de d'envoyer des événements d'un composant enfant vers un composant parent. 
import { EventEmitter } from '@angular/core'; //Objet EventEmitter, permet de transmettre des données lorsqu'un événement se produit dans le composant enfant. 

//Type 
//type User = {
//  id: string;
//  avatar: string;
//  name: string;
//}; 

//Interface 
interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//Toutes les propriete défini dans cette classe sont accessible dans le fichier component.html 
export class UserComponent {
  //Angular 

  //Creation d'un type de donnees complexe pour utiliser les éléments de la classe
  @Input({required: true}) user!: User;

 @Output() select = new EventEmitter(); //Objet EventEmitter, envoyer des événements d'un composant enfant vers un composant parent. 
 

 get imagePath(){
  return 'assets/users/users/' + this.user.avatar; //Cela permet de générer le chemin de l'image dynamiquement en fonction du avatar reçu.
 }


//Méthode permettant d'envoyer les éléments vers le parent
onSelectUser(){
  this.select.emit(this.user.id); //Méthode venant de EventEmitter, permet de transmettre une nouvelle valeur vers le composant parent
}
}
