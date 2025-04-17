import { Component } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users'; 
import { Input } from '@angular/core'; 
import { Output } from '@angular/core';
import { TaskComponent } from "./task/task.component"; 

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  //Input the user name
  @Input() name?: string; 
}
