import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../mock-data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects = PROJECTS;
  selectedProject: Project;

  
  constructor() { 
  
  }

  ngOnInit() {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
  
}
