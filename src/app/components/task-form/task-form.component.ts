import { Component , OnInit } from '@angular/core';
import { Task } from 'src/app/constants/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent  implements OnInit {
  tasks: Task[]=[];
  newTask:string = ''; 
  constructor (){};
  ngOnInit(): void {
      
  }   
  addTask(){
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name : this.newTask , 
        completed : false 
      } ;
      this.tasks.push(newTask); 
      this.newTask = '' ;
      console.log(this.tasks)
      
    }
  }       
}
