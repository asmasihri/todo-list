import { Component , Input, OnInit, ChangeDetectorRef} from '@angular/core';
import { Task } from 'src/app/constants/task';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent implements OnInit {
  @Input() tasks: Task[];
  constructor(private changeDetectorRef: ChangeDetectorRef){}
  ngOnInit(): void{
    
  }
  removeTask(task:Task){
    const taskIndex = this.tasks.indexOf(task); 
    if (taskIndex !==-1) {
      this.tasks.splice(taskIndex,1);
      
    }

  }
  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    this.changeDetectorRef.detectChanges(); // Force l'actualisation de l'affichage

  }






}
