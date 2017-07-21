import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})

export class ProjectPageComponent implements OnInit {

	routeID: string;

	constructor(
		//private router: Router
		) { }

	ngOnInit() {
  }

}
