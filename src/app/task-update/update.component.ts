import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';
import { Parent } from '../model/parent';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private todayDate: any = new Date();
  private id: any;
  private viewOnly: boolean = false;
  private task: Task = new Task();
  private successMessage: string = '';
  private failureMessage: string = '';
  private display: string = 'none';
  private parent: Parent = new Parent();
  private tasks: Task[];
  private allParent: Parent[];
  private taskNameError: string;
  private dateError: string;
  private userError: string;
  private enableParent: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private datePipe: DatePipe) {

  }

  ngOnInit() {
    this.todayDate = this.datePipe.transform(this.todayDate, 'yyyy-MM-dd');
    this.id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(this.id).subscribe(resp => {
      this.task = resp;
      if (this.task.task) {
        this.viewOnly = (this.task.endDate <= this.todayDate);
      }
      if (!this.task.startDate) {
        this.enableParent = true;
      }
      if (!this.task.parent) {
        this.task.parent = new Parent();
      }
    });
  }

  updateTask(event) {
    this.successMessage = this.taskNameError = this.dateError = this.userError = this.failureMessage = '';
    event.preventDefault();
    if (this.task.parent && (!this.task.parent.task || this.task.parent.task.trim() === "")) {
      this.task.parent = null;
    }
    if (this.validate()) {
      this.taskService.updateTask(this.task).subscribe(
        resp => this.successMessage = 'Task updated successfully!',
        error => this.failureMessage = 'Update failed. Try again later');
    }
    // this.router.navigate(['/view']);
  }

  validate() {
    let isValid: boolean = true;
    if (!this.task.task || this.task.task.trim() === "") {
      this.taskNameError = "Task Name is mandatory";
      this.failureMessage = "Mandatory fields are missing";
      isValid = false;
    }
    if (!this.enableParent && (!this.task.startDate || !this.task.endDate || this.task.startDate > this.task.endDate)) {
      this.dateError = "Invalid Start and End date";
      this.failureMessage = "Mandatory fields are missing/Invalid";
      isValid = false;
    }
    return isValid;
  }

  openParentModel() {
    this.taskService.getAllParent().subscribe(
      resp => this.allParent = resp
    );
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }

  selectedParent(parent: Parent, event: Event) {
    event.preventDefault();
    this.parent = parent;
  }

  add() {
    this.task.parent = this.parent;
    this.display = "none";
  }
}
