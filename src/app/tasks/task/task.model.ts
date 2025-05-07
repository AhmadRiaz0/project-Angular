export interface Task {
  id: string; //Les noms de propriétés dans l'interface de l'enfant sont les mêmes que ceux du parent, Angular va faire le lien automatiquement.
  userId: string;
  title: string;
  summary: string;
  dueDate:string;
}

export interface NewTaskData {
  title: string; 
  summary: string; 
  date: string;
}