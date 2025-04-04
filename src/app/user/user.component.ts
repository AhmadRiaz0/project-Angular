import { Component, computed } from '@angular/core';
import { Input } from '@angular/core'; //1. Décorateur @Input(), qui sert à recevoir des données depuis un autre composant parent.
import { input } from '@angular/core'; //2. Fonction input, permet de transformer la propriété en fonction + on utilise le mecanisme de Signal pour la gestion des changements sur cette propriété

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//Toutes les propriete défini dans cette classe sont accessible dans le fichier component.html 
export class UserComponent {
  //Angular Decorateur @input
 @Input({required: true}) avatar!: string; //2.Décorateur @Input() aux propriétés du composant (Ces valeurs seront envoyées par un autre composant (le composant parent)), "required" : force le parent à fournir une valeur obligatoire à l'@Input
 @Input({required: true}) name!: string; //2.Décorateur @Input() aux propriétés du composant (Ces valeurs seront envoyées par un autre composant (le composant parent)), "required" : force le parent à fournir une valeur obligatoire à l'@Input

 get imagePath(){
  return 'assets/users/users/' + this.avatar; //9. Cela permet de générer le chemin de l'image dynamiquement en fonction du avatar reçu.
 }



onSelectUser(){
}


//Angular 17 : fonction input
//avatar = input.required<string>() //3.Fonction input(), on transforme la propriété en fonction + on utilise le mecanisme de Signal pour la gestion des changements sur cette propriété
//name = input.required<string>() //3.Fonction input(), on transforme la propriété en fonction + on utilise le mecanisme de Signal pour la gestion des changements sur cette propriété
//imagePath = computed(() => {
//  return 'assets/users/users/' + this.avatar;
//})
}
