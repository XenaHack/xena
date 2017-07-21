import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  providers: [ProjectService]
})
export class ProjectPageComponent implements OnInit {

  constructor(
    private projectService : ProjectService
  ) { }

  ngOnInit() {
    this.createProject();
  }

  createProject(){
var jsonBody = {
      "title": "Xena Microservice", "githubUrl": "https://github.com/whoisjeff/xena","tags": ["angularjs","#springBoot","boom"]
    };
    this.projectService.createProject(jsonBody).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  getProjectByTags(){
    var tagArray = ["boom", "yay"];
    this.projectService.getProjectByTags(tagArray).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  

}
