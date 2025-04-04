import { Component, computed } from '@angular/core';
import { Input } from '@angular/core'; //Décorateur @Input(), qui sert à recevoir des données depuis un autre composant parent.
import { input } from '@angular/core'; //Fonction input, permet de transformer la propriété en fonction + on utilise le mecanisme de Signal pour la gestion des changements sur cette propriété
import { Output } from '@angular/core'; //Fonction output, permet de d'envoyer des événements d'un composant enfant vers un composant parent. 
import { EventEmitter } from '@angular/core'; //Objet EventEmitter, permet de transmettre des données lorsqu'un événement se produit dans le composant enfant. 

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//Toutes les propriete défini dans cette classe sont accessible dans le fichier component.html 
export class UserComponent {
  //Angular Decorateur @input
 @Input({required: true}) id!: string; //Décorateur @Input() aux propriétés du composant (Ces valeurs seront envoyées par un autre composant (le composant parent)), "required" : force le parent à fournir une valeur obligatoire à l'@Input
 @Input({required: true}) avatar!: string; //Décorateur @Input() aux propriétés du composant (Ces valeurs seront envoyées par un autre composant (le composant parent)), "required" : force le parent à fournir une valeur obligatoire à l'@Input
 @Input({required: true}) name!: string; //Décorateur @Input() aux propriétés du composant (Ces valeurs seront envoyées par un autre composant (le composant parent)), "required" : force le parent à fournir une valeur obligatoire à l'@Input
 @Output() select = new EventEmitter(); //Objet EventEmitter, envoyer des événements d'un composant enfant vers un composant parent. 


 get imagePath(){
  return 'assets/users/users/' + this.avatar; //Cela permet de générer le chemin de l'image dynamiquement en fonction du avatar reçu.
 }



onSelectUser(){
  this.select.emit(this.id); //2. Méthode venant de EventEmitter, permet de transmettre une nouvelle valeur vers le composant parent
}


//Angular 17 : fonction input
//avatar = input.required<string>() //Fonction input(), on transforme la propriété en fonction + on utilise le mecanisme de Signal pour la gestion des changements sur cette propriété
//name = input.required<string>() //Fonction input(), on transforme la propriété en fonction + on utilise le mecanisme de Signal pour la gestion des changements sur cette propriété
//imagePath = computed(() => {
//  return 'assets/users/users/' + this.avatar;
//})
}
